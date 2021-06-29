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

// For each
meses.forEach(function (mes) {
  if (mes === 'marzo') {
    console.log('el mes es marzo');
  }
});

// includes method
console.log(meses.includes('marzo'));
// Some method: recomendado para arreglos de objetos

// No recomenble usar keyword function
console.log(
  carrito.some(function (producto) {
    return producto.nombre === 'celular';
  })
);
// Arrow function es mejor
console.log(
	carrito.some(producto => producto.nombre === 'celular'),
);

// Metodo Reduce
// Itera sobre un array y ejecuta una funcion que devuelve un resultado
console.log(
// Llamar a reduce con 0 como el total inicial, despues de iterar,
// Retorna el total de precio de todos los productos
carrito.reduce(function (total, producto) {
   // Retorna el total hasta el momento y lo suma con otro precio
   return total + producto.precio;
}, 0)
);

// Arrow function
console.log(
	carrito.reduce((total, producto) => total + producto.precio, 0),
);

// Metodo Filter
// Toma de parametro una funcion que retorna una condicional,
// en caso de ser true, paso el filtro, de lo contrario,
// no se retorna
console.log(
 carrito.filter(function (producto) {
    return producto.precio < 1000;
})
);

// Arrow funtion
console.log(carrito.filter(producto => producto.precio < 1000));
