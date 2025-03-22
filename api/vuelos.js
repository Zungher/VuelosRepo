const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const url = 'http://salidas.dgac.gob.gt/vuelos/pantallas/salidas.php';

  try {
    const response = await fetch(url);
    let html = await response.text();

    // 1) Reemplaza cualquier referencia con dominio (http://salidas.dgac.gob.gt/...)
    html = html.replace(
      /https?:\/\/salidas\.dgac\.gob\.gt\/vuelos\/pantallas\/img\//gi,
      '/images/'
    );

    // 2) Reemplaza con barra inicial (/vuelos/pantallas/img/...)
    html = html.replace(
      /\/vuelos\/pantallas\/img\//gi,
      '/images/'
    );

    // 3) Reemplaza sin barra (vuelos/pantallas/img/...)
    html = html.replace(
      /vuelos\/pantallas\/img\//gi,
      '/images/'
    );

    // Configura los headers y envía el HTML modificado
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);

  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
};
