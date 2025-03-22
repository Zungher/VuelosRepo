// api/salidas.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const url = 'http://salidas.dgac.gob.gt/vuelos/pantallas/salidas.php';

  try {
    const response = await fetch(url);
    let html = await response.text();

    // Reemplaza rutas que sean 'src="images/...'
    // por 'src="/images/...'
    // De este modo, en el HTML final, <img src="images/icon_salidas.png">
    // se convertirá en <img src="/images/icon_salidas.png">
    html = html.replace(/src="images\//g, 'src="/images/');

    // Configura cabeceras para permitir acceso y declarar tipo de contenido
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');

    // Envía el HTML modificado
    res.status(200).send(html);

  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
};
