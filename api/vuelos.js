const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const url = 'http://salidas.dgac.gob.gt/vuelos/pantallas/salidas.php';

  try {
    const response = await fetch(url);
    const html = await response.text();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
};