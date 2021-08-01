// Async / Await

function descargarNuevoClientes() {
  return new Promise(resolve => {
    console.log('Descargando nuevos Clientes');

    setTimeout(() => {
      resolve('Clientes descargados correctamente');
    }, 5000);
  });
}
function descargarUltimosPedidos() {
  return new Promise(resolve => {
    console.log('Descargando ultimos pedidos');
    setTimeout(() => {
      resolve('Los pedidos fueron descargados');
    }, 3000);
  });
}

async function app() {
  try {
    const resulttado = await Promise.all([
      descargarNuevoClientes(),
      descargarUltimosPedidos(),
    ]);
    console.log(resulttado[0]);
    console.log(resulttado[1]);
  } catch (error) {
    console.error(error);
  }
}

app();
