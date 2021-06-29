// Arrow functions

const sumar = (n1, n2) => {
  console.log(n1 + n2);
};

sumar(102, 23);

const aprendiendo = (materia) => {
  console.log(`Aprendiendo ${materia}`);
};

aprendiendo('Matematicas');

// Arrow functions in array methods
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
meses.forEach((mes) => {
  if (mes === 'marzo') {
    console.log('el mes es marzo');
  }
});

// Some
console.log(
  carrito.some((producto) => producto.nombre === 'monitor 20 pulg'),
);

// Reduce
console.log(
  carrito.reduce((total, producto) => total + producto.precio, 0),
);

// Filter
console.log(carrito.filter((producto) => producto.precio < 1000));

console.log(
  carrito.filter((producto) => producto.nombre === 'celular'),
);
