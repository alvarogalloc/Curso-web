// Estructuras de control

// const puntaje = 100;

// Tres === para checar valor y
// Tipo de la expresion
// if (puntaje !== 1000) {
//   console.log('Si el puntaje es 1000');
// } else {
//   console.log(`El puntaje es igual a ${puntaje}`);
// }

// const efectivo = 1000;
// const carrito = 800;

// if (efectivo > carrito) {
//   console.log('El usuario puede pagar');
// } else {
//   console.log('Fondos insuficientes');
// }

const rol = 'Usuario';

// If puede ser muy tedioso si se usa mas de 3-4 veces
// Para eso es mejor switch
if (rol === 'Admin') {
  console.log('Acceso a todo el sistema');
} else if (rol === 'Editor') {
  console.log('Acceso parcial');
} else {
  console.log('Sin acceso');
}
