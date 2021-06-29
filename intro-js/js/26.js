// this en javascript

// this en arrow functions
// hace que this sea igual a
// el objeto window y no al
// objeto en el que esta el
// metodo
const reservacion = {
  nombre: 'Juan',
  apellido: 'de la torre',
  total: 1000,
  pagado: false,
  info() {
    console.log(
      `El cliente ${this.nombre}, reservó y su cantidad a pagar es ${this.total}`,
    );
  },
};

reservacion.info();
