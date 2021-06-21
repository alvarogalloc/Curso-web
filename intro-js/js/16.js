// Funciones

/*
 * Hoisting en javascript:
 * 1. Se registran primero las
 * declaraciones de funciones como:
 * function hola(){};
 * y se podran llamar antes de su
 * definicion.
 * 2. Funciones como:
 * const hola = function(){};
 * no se podran llamar antes de su
 * declaracion.
 * RESUMEN:
 * ETAPA 1: Se registran nombres de funciones,
 * variables, clases, etc.
 * ETAPA 2: Se ejecuta el codigo.
 */

// Declaracion de funcion
function sumar(x, y) {
	console.log(x + y);
}

sumar(1, 10);

// Expresion de la funcion
const nombre = function () {
	console.log('Hola desde funcion con expresion');
};

nombre();
// IIFE:
// Estas funciones no necesitan
// nombre por que son llamadas en cuanto
// este en esa linea de codigo
(function () {
	console.log('Hello from IIFE');
})();
