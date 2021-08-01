// Fetch API

const obtenerEmpleados = async () => {
  const archivo = 'js/empleados.json';
  // MAL CODIGO
  // fetch(archivo)
  //   .then(resultado => resultado.json())
  //   .then(datos => {
  //     const { empleados } = datos;
  //     empleados.forEach(empleado => {
  //       document.querySelector(
  //         '.text',
  //       ).innerHTML += `${empleado.nombre} <br>`;
  //     });
  //   });
  // Buen Codigo
  const resultado = await fetch(archivo);
  const datos = await resultado.json();
  console.log(datos);
};

obtenerEmpleados();
