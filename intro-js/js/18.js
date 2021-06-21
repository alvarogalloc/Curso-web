// X y Y son parametros de la funcion
function sumar(x = 0, y = 0) {
	console.log(x + y);
}

sumar();
sumar(120, 402);
sumar(123, 321);

const saludo = function (nombre = 'Heriberto') {
	console.log(`Saludos ${nombre} desde la funcion!!`);
};

saludo();
saludo('Alvaro');
