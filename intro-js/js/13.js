// Unir objetos con spread operator
// 'use strict'; // Javascript con malas practicas como errores

const producto = {
  nombreProducto: 'Monitor 27 pulgadas',
  precio: 100,
  disponible: true,
};

const medida = {
  peso: 70,
  altura: 173.8,
};

// Spread operator: ...
const nuevo = {...producto, ...medida};

console.log(nuevo);
