// Object Methods
'use strict'; // Javascript con malas practicas como errores

const producto = {
  nombreProducto: 'Monitor 27 pulgadas',
  precio: 100,
  disponible: true,
};

// Object.freeze(producto); // No permite agregar, cambiar o eliminar
Object.seal(producto); // No permite agregar y eliminar

// console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));
