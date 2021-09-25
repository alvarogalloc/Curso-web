const seleccionarServicio = (e) => {
  console.log(e.target);
};

const mostrarSevicios = async () => {
  try {
    const resultado = await fetch('./servicios.json');
    const db = await resultado.json();

    const { servicios } = db;

    servicios.forEach(servicio => {
      const { nombre, precio } = servicio;

      // DOM things
      // Generar nombre de servicio
      const nombreServicio = document.createElement('p');
      nombreServicio.textContent = nombre;
      nombreServicio.classList.add('nombre-servicio');

      // Generar precio de servicio
      const precioServicio = document.createElement('p');
      precioServicio.textContent = `$ ${precio}`;
      precioServicio.classList.add('precio-servicio');

      // Generar div contenedor de servicio
      const servicioDiv = document.createElement('div');
      servicioDiv.classList.add('servicio');

      // Selecciona un servicio para el carrito
      servicioDiv.onclick = seleccionarServicio;

      // Inyectar precio y nombre a div de servicio
      servicioDiv.appendChild(nombreServicio);
      servicioDiv.appendChild(precioServicio);

      // Inyectarlo en el html
      document.querySelector('#servicios').appendChild(servicioDiv);
    });
  } catch (error) {
    console.log(error);
  }
};

const iniciarApp = () => {
  mostrarSevicios();
};

document.addEventListener('DOMContentLoaded', () => {
  iniciarApp();
});
