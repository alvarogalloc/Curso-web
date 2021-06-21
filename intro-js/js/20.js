// Metodos de propiedad

// Mala practica, mejor usar el
// shorthand () despues del nombre de metodo
// const reproductor = {
//  reprouducir: function(nombre) {
//		console.log(`Reproduciendo cancion: ${nombre}`);
//	},
// };

// Mejor asi
const reproductor = {
	reprouducir(nombre) {
		console.log(`Reproduciendo cancion: ${nombre}`);
	},
	pausar(nombre) {
		console.log(`Pausando cancion: ${nombre}`);
	},
	crearPlaylist(nombre) {
		console.log(`Creando playlist con nombre '${nombre}'`);
	},
};

reproductor.borrarCancion = function (nombre) {
	console.log(`Eliminando cancion: ${nombre}`);
};

reproductor.reprouducir('Hold on forever');
reproductor.pausar('Hold on forever');
reproductor.borrarCancion('Hold on forever');
reproductor.crearPlaylist('the ones i like');
