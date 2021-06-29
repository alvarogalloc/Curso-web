// POO

// Object Literal
// const producto = {};

// Object constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

/*
 * Prototype nos permite
 * tener funciones con un tipo
 * de objeto en eespecifico
 */

Producto.prototype.formatearProducto = function () {
  return `El producto ${this.nombre} tiene el precio de $${this.precio}`;
};

const producto2 = new Producto('Celular iPhone', 1000);

// function formatearProducto(producto) {
//   return `El producto ${producto.nombre} tiene un precio de $${producto.precio}`;
// }

console.log(producto2.formatearProducto());
