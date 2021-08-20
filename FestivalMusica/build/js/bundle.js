
const mostrarImagen = (ev) => {
  console.log(ev.target.dataset.imagenId);
  const id = parseInt(ev.target.dataset.imagenId, 10);

  const body = document.querySelector('body');
  // Crear div de overlay
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  // Generar imagen
  const imagen = document.createElement('img');
  imagen.src = `build/img/grande/${id}.webp`;
  // Generar boton para cerrar imagen
  const cerrarImagen = document.createElement('p');
  cerrarImagen.textContent = 'X';
  cerrarImagen.classList.add('btn-cerrar');

  // Funcionamiento boton
  cerrarImagen.onclick = () => {
    overlay.remove();
    body.classList.remove('fijar-body');
  };

  // Cerrar al tocar el overlay
  overlay.onclick = () => {
    overlay.remove();
    body.classList.remove('fijar-body');
  };

  // Añadir hijos a overlau
  overlay.appendChild(imagen);
  overlay.appendChild(cerrarImagen);
  // Añadir overlay a body
  body.appendChild(overlay);
  body.classList.add('fijar-body');
};

const crearGaleria = () => {
  const galeria = document.querySelector('.galeria-imagenes');
  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement('img');
    imagen.src = `build/img/thumb/${i}.webp`;
    imagen.dataset.imagenId = i;
    imagen.onclick = mostrarImagen;

    const lista = document.createElement('li');
    lista.appendChild(imagen);

    galeria.appendChild(lista);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  crearGaleria();
});
