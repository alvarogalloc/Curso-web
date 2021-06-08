// Orden de las Oparaciones

/*
 * 1. Paretesis ().
 * 2. Raiz y potencia.
 * 3. Multiplicacion y division
 * 4. Suma y resta.
 *
 * REGLA: Las operaciones del
 * mismo nivel de orden se ejecutan
 * de izquierda a derecha
 */

let resultado;

resultado = 20 + 30 * 2;
console.log(resultado);

resultado = (20 + 30) * 2;
console.log(resultado);

// Operador modulo %
// Este operador retorna el
// residuo de una division
// entre los dos operandos
console.log(resultado % 2); // 100/2 = 0 residuo = 0
console.log(resultado % 3); // 100/3 = 33 residuo = 1

// Incrementos
// Operadores ++ y --

let puntaje = 10;

// '++' o '--' Antes de variable incrementa/decrementa su valor
// y luego lo regresa

// '++' o '--' Despues de variable regresa el valor
// y luego incrementa/decrementa el valor

// puntaje = puntaje + 1
console.log(puntaje++); // Manda 10
console.log(++puntaje); // Manda 12

// puntaje = puntaje - 1
console.log(puntaje--); // Manda 12
console.log(--puntaje); // Manda 10

// Operadores +=, -=, *=, /=
console.log((puntaje += 5)); // Manda 15
console.log((puntaje -= 5)); // Manda 10
console.log((puntaje *= 5)); // Manda 50
console.log((puntaje /= 5)); // Manda 10
