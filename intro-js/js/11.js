// Destructuring de Objetos

const producto = {
  nombreProducto: 'Monitor 27 pulgadas',
  precio: 100,
  disponible: true,
};

// Forma anterior
// const nombreProducto = producto.nombreProducto;
// const precioProducto = producto.precio;

// console.log(nombreProducto);
// console.log(precioProducto);

// Forma nueva
const {precio, disponible} = producto;
console.log(precio, disponible);
