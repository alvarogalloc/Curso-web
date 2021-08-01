/*
 * Es una buena practica tener
 * siempre una variable para el
 * resultado de QuerySelector
 * para mejorar la legibilidad
 * de nuestro código
 */
// Query Selector
// const heading = document.querySelector('.header__texto h2'); // retorna 0 o un elemento del DOM
// heading.textContent = 'Holalalall';
// console.log(heading);

// Query Selector All
// Retorna un arreglo con 0 o mas elementos del DOM
// const enlaces = document.querySelectorAll('.navegacion a');
// enlaces[0].textContent = 'Hola desde JS';
// enlaces[0].classList.add('nuevaClase');
// enlaces[0].classList.remove('navegacion__enlace');

// Get Element By Id
// Es mejor usar los dos anteriores
// const heading2 = document.getElementById('heading');
// heading2.textContent = 'Typescript es mejor que JS';
// console.log(heading2);

// Generar Html
// const nuevoEnlace = document.createElement('A');
// nuevoEnlace.href = 'https://google.com';
// nuevoEnlace.textContent = 'Ir a google';
// nuevoEnlace.classList.add('navegacion__enlace');
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);
// console.log(nuevoEnlace);

// EVENTOS

// Load espera a que cargue toda la pagina (imagenes, html, css, js)
// window.addEventListener('load', () => {
//   console.log('Pagina cargada');
// });

// Lo mismo que arriba
// window.onload = () => {
//   console.log('Pagina cargada');
// };

// Caundo halla scroll
// window.onscroll = () => {
//   console.log('Estas Scrolleando!!');
// };

// Cuando resione alguna tecla
// window.onkeypress = () => {
//   console.log('Tecla Presionada');
// };

// Espera a que cargue solo el html
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM cargado');
// });

// Botones
// Es buena practica guardar los elementos en constantes
// const botonPrimario = document.querySelector('.boton--primario');
// botonPrimario.addEventListener('click', ev => {
//   console.log(ev);
//   Previene el type="submit"
//   ev.preventDefault();
//   console.log('Formulario Enviado');
// });

// Teclado
const formularioNombre = document.querySelector('#nombre');
const formularioEmail = document.querySelector('#email');
const formularioMensaje = document.querySelector('#mensaje');

const datos = {
  nombre: '',
  email: '',
  mensaje: '',
};
/*
 * 'input': al presionar una tecla con el input seleccionado.
 * 'change': al terminar de escribir y deseleccionar el input
 */
const formulario = document.querySelector('.formulario');
const leerInput = ev => {
  datos[ev.target.id] = ev.target.value;
};

const eliminarDomConTimeout = (elementoDom, timeout) => {
  setTimeout(() => {
    elementoDom.remove();
  }, timeout);
};

const mostrarAlerta = (mensaje, error = null) => {
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;

  if (error) alerta.classList.add('error');
  else alerta.classList.add('correcto');

  formulario.appendChild(alerta);
  eliminarDomConTimeout(alerta, 5000);
};

formularioNombre.addEventListener('change', leerInput);
formularioEmail.addEventListener('change', leerInput);
formularioMensaje.addEventListener('change', leerInput);

// Evento de formulario 'submit'
formulario.addEventListener('submit', ev => {
  ev.preventDefault();
  const { nombre, email, mensaje } = datos;
  if (nombre === '' || email === '' || mensaje === '') {
    mostrarAlerta('Todos los campos son obligatorios', true);
    return;
  }
  mostrarAlerta('Mensaje enviado con éxito');
});
