const carrito = [
  { nombre: 'monitor 20 pulg', precio: 700 },
  { nombre: 'celular', precio: 1000 },
];

// For loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) console.log(`${i} es par`);
//   else console.log(`${i} es impar`);
// }

// Fibbonacci
// let n1 = 0;
// let n2 = 1;
// let next;
// for (let i = 1; i <= 30; i++) {
//   console.log(`Fibbonacci term ${i} = ${n1}`);
//   next = n1 + n2;
//   n1 = n2;
//   n2 = next;
// }

// for (let i = 0; i < carrito.length; i++) {
//   console.log(carrito[i]);
// }

// While loop
// let i = 1;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(`${i} es par`);
//   } else {
//     console.log(`${i} es impar`);
//   }
//   i++;
// }

// let j = 0;
// while (j < carrito.length) {
//   console.log(carrito[j]);
//   j++;
// }

// Do-while loop

let h = 0;
do {
  console.log(carrito[h]);
  h++;
} while (h < carrito.length);
