// Notification API

const boton = document.querySelector('#boton');

boton.addEventListener('click', () =>
  Notification.requestPermission().then(resultado =>
    console.log(`El resultado es ${resultado}`)
  )
);

if (Notification.permission === 'granted')
  new Notification('Esta es una notificacion', {
    icon: '../img/1.jpg',
    body: 'Notification API practica'
  });
else console.error('Notification permission not granted');
