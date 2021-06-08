// Arreglos/Arrays

// Inicializar por []
// Los Arreglos pueden tener distintos tipos, hasta otros arreglos

const arr = [1, 2, 3, 3, 1, 2, 3, 4, 5, 6, 7];


// Por constructor
// const arr2 = new Array('Enero', 'Febrero','Marzo');

// Acceder a un elemento
// console.log(arr[3]);

// Extension de arreglo
// console.log(arr.length);

// Iteradores
// arr.forEach((element) => {
//   console.log(element);
// });


// Metodo 1: Metodo Array.push()
arr.push('Hola');

// NO RECOMENDADO
// Metodo 2: agregar elemento a indice no existente
arr[12] = 'Nuevo Elemento';

// Agregar elementos al principio
arr.unshift('Al principio pa');

// Eliminar ultimo elemento
// arr.pop();

// Eliminar el primer elemento del arreglo
// arr.shift();

// Eliminar elementos a partir de un indice
// param 1: indicar donde empieza a eliminar
// param 2: Cuanto elementos a eliminar a partir de param 1

arr.slice(2, 1);

// Los metodos anteriores no son recomendados
// por que mutan el arrego inicial.
// Es recomendable hacer copias con Spread operator '...'
const newArr = [...arr, 1, 2, 3];

console.table(newArr);
