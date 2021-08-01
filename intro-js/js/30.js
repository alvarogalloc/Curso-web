// Promesas Javascript

const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = true;
  if (auth !== true) {
    resolve('Usuario autenticado');
  } else {
    reject('No se pudo iniciar sesion');
  }
});

usuarioAutenticado
  .then(resultado => console.log(resultado))
  .catch(error => console.log(error));

// console.log(usuarioAutenticado);

// En promise hay 3 valores
// Pending: No se ha cumplido pero tampoco rechazado
// Fulfilled: Ya se cumplio la promesa
// Rejected: Se rechazo la promesa
