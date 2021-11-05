const seleccionarServicio = e => {
  let elemento;
  if (e.target.tagName === 'P') {
    elemento = e.target.parentElement;
  } else {
    elemento = e.target;
  }

  if (elemento.classList.contains('seleccionado')) {
    elemento.classList.remove('seleccionado');
  } else {
    elemento.classList.add('seleccionado');
  }
};

const mostrarSevicios = async () => {
  try {
    const resultado = await fetch('./servicios.json');
    const db = await resultado.json();

    const { servicios } = db;

    servicios.forEach(servicio => {
      const { id, nombre, precio } = servicio;

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
      servicioDiv.dataset.idServicio = id;

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

let pagina = 1;

const mostrarSeccion = () => {
  const seccionActual = document.querySelector(`#paso-${pagina}`);
  seccionActual.classList.add('mostrar-seccion');

  // Resalta el Tab inicial
  const tab = document.querySelector(`[data-paso="${pagina}"]`);
  tab.classList.add('actual');
};

const cambiarSeccion = () => {
  const enlaces = document.querySelectorAll('.tabs button');

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault();

      // Eliminar .mostrar-seccion de la seccion anterior
      document
        .querySelector('.mostrar-seccion')
        .classList.remove('mostrar-seccion');

      // Mostrar seccion por el enlace seleccionado
      pagina = parseInt(e.target.dataset.paso, 10);
      const seccion = document.querySelector(`#paso-${pagina}`);
      seccion.classList.add('mostrar-seccion');

      // Eliminar .actual en el tab anterior
      document
        .querySelector('.tabs .actual')
        .classList.remove('actual');

      // Agregar .actual al nuevo tab
      const tab = document.querySelector(`[data-paso="${pagina}"]`);
      tab.classList.add('actual');
    });
  });
};

const paginaSiguiente = () => {
  const botonSiguiente = document.querySelector('#siguiente');
  botonSiguiente.addEventListener('click', () => {
    pagina++;
    console.log(pagina);
  });
};

const paginaAnterior = () => {
  const botonAnterior = document.querySelector('#anterior');
  botonAnterior.addEventListener('click', () => {
    pagina--;
    console.log(pagina);
  });
};

const botonesPaginador = () => {
  const botonSiguiente = document.querySelector('#siguiente');
  const botonAnterior = document.querySelector('#anterior');

  if (pagina === 1) {
    botonAnterior.classList.add('ocultar');
  } else if (pagina === 3) {
    botonSiguiente.classList.add('ocultar');
  }
};

const iniciarApp = () => {
  mostrarSevicios();

  // Reslta el Div actual segun el tab presionado
  mostrarSeccion();

  // Oculta o muestra la seccion segun el tab seleccionado
  cambiarSeccion();

  // Mostrar siguiente pagina y anterior pagina
  paginaSiguiente();
  paginaAnterior();

  // Ocultar o mostrar boton siguiente/anterior
  botonesPaginador();
};

document.addEventListener('DOMContentLoaded', () => {
  iniciarApp();
});
