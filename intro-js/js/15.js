const meses = ['enero', 'febrero', 'marzo', 'abril'];

const carrito = [
  {
    nombre: 'monitor 20 pulg',
    precio: 700,
  },
  {
    nombre: 'celular',
    precio: 1000,
  },
];

// for each
// meses.forEach(function(mes) {
//   if (mes === 'marzo') {
//     console.log('el mes es marzo');
//   }
// });

// includes method
console.log(meses.includes('marzo'));




// some method: recomendado para arreglos de objetos
console.log(
  carrito.some(function (producto) {
    return producto.nombre === 'celular';
  })
);
