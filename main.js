//Funcion para mostrar items en pantalla
// funcion 3

function addToCart(id) {
  const productoIntroduzido = inventarioVinateria.find((item) => item.id == id);
  carritoDeCompras.push(productoIntroduzido);
  mostrarItemsEnCarrito();
}
//funcion 4
function quitarDelCarrito(id) {
  carritoDeCompras.splice(id, 1);
  mostrarItemsEnCarrito();
}
//funcion 5
function FiltrarPorTipos(categoria) {
  inventarioVinateria = [...inventarioVinateriaCopia];
  if (categoria == "ron") {
    inventarioVinateria = inventarioVinateria.filter((item) => item.tipoDeLicor == categoria);
  }
  mostrarItemsEnTienda();
}
function mostrarItemsEnTienda() {
  let html = "";
  for (let i = 0; i < inventarioVinateria.length; i++) {
    html =
      html +
      `
      <div  >
        <p><img src="${inventarioVinateria[i].imagen}"/> </p>
        <p> "${inventarioVinateria[i].nombreProducto}" </p>
        <p> $${inventarioVinateria[i].precio}</p>
        <p>${inventarioVinateria[i].tipoDeLicor}</p>
        <p>
         <span onclick=addToCart(${inventarioVinateria[i].id});>🛒</span>
        </p>
      </div>
      `;
  }
  document.getElementById("itemsAmostrar").innerHTML = html;
}

// funcion 2
function mostrarItemsEnCarrito() {
  if (carritoDeCompras.length == 0) {
    document.getElementById("itemsEnElCarrito").innerHTML = "<h3>INGRESA PRODUCTOS A TU CARRITO</h3>";
  } else {
    let html = "";
    for (let i = 0; i < carritoDeCompras.length; i++) {
      html =
        html +
        `
      <div>
      <container>
      <p> <img src="${carritoDeCompras[i].imagen}" /></p>
      <p> ${carritoDeCompras[i].nombreProducto}</p>
      <p> ${carritoDeCompras[i].tipoDeLicor}</p>
      <p> $${carritoDeCompras[i].precio}</p>
      <span onclick=quitarDelCarrito(${[i]});>🗑️</span>
      </container>
      </div>
      `;
    }
    document.getElementById("itemsEnElCarrito").innerHTML = html;
  }
}

//Terminan Funciones.

let esp = " ";

//array de objetos
class ItemsDisponibles {
  constructor(imagen, id, nombreProducto, tipoDeLicor, precio) {
    this.imagen = imagen;
    this.id = id;
    this.nombreProducto = nombreProducto;
    this.tipoDeLicor = tipoDeLicor;
    this.precio = precio;
  }
}
//array disponibles
let inventarioVinateria = [];
const carritoDeCompras = [];
const promosAleatorias = [];
const inventarioVinateriaCopia = [...inventarioVinateria];
promosAleatorias.push("si nos visitas en Lunes hay 10% de descuentos");
promosAleatorias.push("los viernes tenemos msi en toda la tienda");
promosAleatorias.push("los martes tenemos 15% de descuento ");

const mostrarAleatorio = promosAleatorias[Math.floor(Math.random() * promosAleatorias.length)];

const item1 = new ItemsDisponibles("../imagenes/i111jack.jpg", 111, "Jack Daniels", "whiskey", 400);
const item2 = new ItemsDisponibles("../imagenes/i444redL.jpg", 444, "Red Label", "whiskey", 370);
const item3 = new ItemsDisponibles("../imagenes/i131wiliam.jpg", 131, "Wiliam Lawson", "whiskey", 350);
const item4 = new ItemsDisponibles("../imagenes/i112DonJ.jpg", 112, "Don julio", "tequila", 300);
const item5 = new ItemsDisponibles("../imagenes/i107jose.jpg", 107, "Jose Cuervo", "tequila", 250);
const item6 = new ItemsDisponibles("../imagenes/i124jimador.jpg", 124, "Jimador", "tequila", 200);
const item7 = new ItemsDisponibles("../imagenes/i180capitan.jpg", 180, "Capitan Morgan", "ron", 240);
const item8 = new ItemsDisponibles("../imagenes/i100Bac.jpeg", 100, "Bacardi", "ron", 260);
const item9 = new ItemsDisponibles("../imagenes/i166kraken.jpg", 166, "Kraken", "ron", 340);
const item10 = new ItemsDisponibles("../imagenes/i125black.jpg", 125, "Red Label Blac", "whiskey", 600);

inventarioVinateria.push(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10);

mostrarItemsEnTienda();

guardarParaCarrito();
