// Funciones con return

function sumar(n1, n2) {
	return n1 + n2;
}

const resultado = sumar(12, 98);

console.log(resultado);

const total = 100;
// Mala practica asignar valores de variables
// externas a la funcion en la funcion
// Function agregarCarrito(precio) {
//	return (total += precio);
// }

// total = agregarCarrito(600);
// total = agregarCarrito(123);

function calcularIva(precio) {
	return precio * 0.16;
}

console.log(calcularIva(total));
