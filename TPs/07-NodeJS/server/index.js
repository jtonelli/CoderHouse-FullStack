var rta = require('./respuesta');

var request = require('request');

var https = require("https");

var express = require('express');
var app = express();
var appReq = express();

appReq.get('/meliProxy', function (req, res) {
  // console.log(req.query.q)
  var url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q + '&limit=1';

  request.get(url, function (err, resMeli, body) {
      if (!err) {
          // var resultsObj = JSON.parse(body);
          //Just an example of how to access properties:
          res.json(body.toString());
      }
  });

  // https.get(url, function(resMeli) {
  //     // console.log("Got response: " + res.statusCode);
  //     resMeli.on("data", function(d) {
  //     // res.json(d.toString());
  //      body += d;
  //   });
  //   resMeli.on('end', function() {
  //       res.json(body.toString());
  //     });
  // }).on('error', function(e) {
  //     console.log("Got error: " + e.message);
  // });

});

app.get('/meliProxy', function (req, res) {
  // console.log(req.query.q)
	var url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q + '&limit=1';
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

var serverReq = appReq.listen(8054, function () {
  // Escuchar puerto 8054
});