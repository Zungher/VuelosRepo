// api/salidas.js (por ejemplo)
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const url = 'http://salidas.dgac.gob.gt/vuelos/pantallas/salidas.php';

  try {
    const response = await fetch(url);
    let html = await response.text();

    // Reemplaza la ruta original de imágenes por tu ruta local
    // Si en el HTML original aparece <img src="/vuelos/pantallas/img/ua.png">
    // lo convertimos en <img src="/images/ua.png">
    html = html.replace(/\/vuelos\/pantallas\/img\//g, '/images/');

    // Configuramos cabeceras y enviamos el HTML modificado
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
};
