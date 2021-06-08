// Objetos

const producto = {
  nombreProducto: 'Monitor 27 pulgadas',
  precio: 100,
  disponible: true,
};

// Agregar propiedades
producto.descuento = 0.2;

// Cambiar propiedades
producto.nombreProducto = 'iphone';

// Eliminar propiedades
delete producto.precio;

console.log(producto);

// // Syntaxis preferida
// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);
//
// // No me gusta
// console.log(producto['nombreProducto']);
// console.log(producto['precio']);
// console.log(producto['disponible']);
