var rta = require('./respuesta');

var https = require("https");

var express = require('express');
var app = express();

app.get('/meliProxy', function (req, res) {
  // console.log(req.query.q)
	var url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q + '&limit=3';
	var body = '';

	https.get(url, function(resMeli) {
  		// console.log("Got response: " + res.statusCode);
  		resMeli.on("data", function(d) {
			// res.json(d.toString());
			 body += d;
		});
		resMeli.on('end', function() {
    		res.json(body.toString());
  		});
	}).on('error', function(e) {
  		console.log("Got error: " + e.message);
	});
});

app.get('/hola', function (req, res) {
  res.send('<h1>' + rta.print() + '</h1>');
});

app.get('/uno', function (req, res) {
  res.json(rta.objUno);
});

app.get('/dos', function (req, res) {
  res.json(rta.objDos);
});

app.get('/tres', function (req, res) {
  res.json(rta.objTres);
});

app.get('/cuatro', function (req, res) {
  res.json(rta.objCuatro);
});

var server = app.listen(8045, function () {
  // Escuchar puerto 8045
});