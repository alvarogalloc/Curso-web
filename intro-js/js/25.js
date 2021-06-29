// ForEach y map

const carrito = [
  { nombre: 'Alvaro', apellido: 'Gallo' },
  { nombre: 'Isabel', apellido: 'Ornelas' },
  { nombre: 'Mark', apellido: 'Hernandez' },
  { nombre: 'Miguel', apellido: 'Gutierrez' },
  { nombre: 'Rodrigo', apellido: 'De la Peña' },
  { nombre: 'Mateo', apellido: 'Sanchez' },
];

// forEach: Para iterar y hacer algo para mostrar al usuario
carrito.forEach((element) => {
  console.log(element);
});

// Map:  Para uso interno, debe retornar un valor siempre
// como buena pratica
const nombres = carrito.map((element) => element.nombre);
console.log(nombres);
const apellidos = carrito.map((element) => element.apellido);
console.log(apellidos);
