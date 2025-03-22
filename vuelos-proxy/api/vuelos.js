const request = require('request');

module.exports = (req, res) => {
  const url = 'http://salidas.dgac.gob.gt/vuelos/pantallas/salidas.php';
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/html');

  request(url).pipe(res);
};