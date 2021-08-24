const scrollNav = () => {
  const enlaces = document.querySelectorAll('.navegacion-principal a');
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', ev => {
      ev.preventDefault();
      const seccion = document.querySelector(ev.target.attributes.href.value);
      seccion.scrollIntoView({ behavior: 'smooth' });
    });
  });
};

const navFija = () => {
  // Registrar el intersection observer
  const barra = document.querySelector('.header');
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      barra.classList.remove('fijo');
    } else {
      barra.classList.add('fijo');
    }
  });
  // Elemento a observar
  observer.observe(document.querySelector('.festival-info'));
};

document.addEventListener('DOMContentLoaded', () => {
  scrollNav();
  navFija();
});
