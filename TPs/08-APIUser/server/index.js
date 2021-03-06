var TokenGenerator = require( 'token-generator' )({
        salt: 'Ju4n17one$',
        timestampMap: 'abcdefghij', // 16 chars array for obfuscation proposes 
    });
var bodyParser = require('body-parser');
var express = require('express');
var mdb = require('mongoose');

var app = express();
var urldb = 'mongodb://admin:admin@ds041581.mongolab.com:41581/tpairbnb';

app.use(bodyParser.json())

//Establecer conexion.
mdb.connect(urldb, function(err){
	if(err){
		console.log('DB connect - Error: ', err);
	}
	else{
		console.log('Se conecto OK');
	}
})

//Schema = Cuerpo del modelo.
var schema = new mdb.Schema({ 
		name:String, 
		lastName:String, 
		age:Number, 
		email:String, 
		password:String,
		token: String
	});

//El modelo - Entidad
var User = mdb.model('User', schema);


app.post('/Users/', function (req, res) {
	//Creo un usuario
	var u = new User(req.body);

	//Grabo el usuario
	u.save(function (err) {
	  if(err){
	  	console.log('Error - ', err);
	  	res.status(400).end();
	  }
	  else{
	  	console.log(u);
	  	res.status(201).end();
	  }
	  // saved!
	});
});

app.get('/Users/:userId', function (req, res) {
	// Busqueda con filtro
	var query = {email: req.params.userId}
	User.findOne(query, function(err, user){
		console.log('Usuario', user);
		res.json(user);
	});
});

app.get('/Users/', function (req, res) {
	// Busqueda sin filtro
	User.find(function(err, users){
		console.log('Usuario', users);
		res.json(users);
	});
});

app.get('/auth/', function (req, res) {
	// Busqueda con filtro
	var query = {
			email: req.query.email,
			password: req.query.password
		};

	User.findOne(query, function(err, user){
		if(err){
				console.log('Error - ', err);
				res.status(400).end();
		}
		else{
			if(!user){
				console.log('No se encontro el usuario');
				res.status(400).end();
			}
			else{
				query = { _id : user._id};
				var update = { token : TokenGenerator.generate() };
				User.update(query, update, function(err, user){
					if(err){
						console.log('Error - ', err);
						res.status(400).end();
					}
					else{
						User.findOne(query, function(err, user){
							console.log('token', user.token);
							res.json(user);
						});
					}
				});
			}
		}
	});
});

app.put('/Users/:userId', function (req, res) {

	//Seguridad
	var tokenreq = req.headers.authorization;
	var query = {token: tokenreq};

	User.findOne(query, function(err, user){
		if(err){
				console.log('Error - ', err);
				res.status(400).end();
		}
		else{
			if(!user){
				console.log('Token invalido');
				res.status(400).end();
			}
			else if(user.email == req.params.userId){
				//Actualizo por esta OK
				query = { _id : user._id};
				var update = req.body;

				User.update(query, update, function(err, userupd){
					if(err){
						console.log('Error - ', err);
						res.status(400).end();
					}
					else{
						console.log(userupd);
						res.status(201).end();
					}
				});
			}
			else{
				console.log('No tiene permisos para actualizar este usuario');
				res.status(400).end();
			}
			
		}
	});
});

app.delete('/Users/:userId', function (req, res) {
	// Remove con filtro
	var query = {email: req.params.userId}
	User.remove(query, function(err, user){
		if(err){
			console.log('Error - ', err);
			res.status(400).end();
		}
		else{
			console.log(user);
			res.status(201).end();
		}
	});
});

////Creo un usuario
// var u = new User({ name: 'juan' });

////Grabo el usuario
// u.save(function (err) {
//   // if (err) return handleError(err);
//   if(err){
//   	console.log('Error - ', err);
//   }
//   else{
//   	console.log(u);
//   	u.name = 'JuaniTone';
//   	u.save();
//   }
//   // saved!
// });

////Actualizar Datos de toda la tabla.
// var query = {
// 	edad:{
// 		$lt:50
// 	}
// };
// var query = {};
// var update = {edad : 25};
// var options = {multi: true};
// User.update(query, update, options, function(err, docs){
// 	console.log(docs);
// });

// //Busqueda sin parametros con modificacion de datos
// User.find({}, function(err, docs){
// 	var primero = docs[0];
	
// 	primero.name = 'Juani';

// 	primero.save(function(err){
// 		console.log('Usuario', primero)
// 	});

// });

// // Busqueda con filtro
// User.find({name : 'JuaniTone'}, function(err, docs){
// 	console.log('Usuarios', docs);	
// });


app.listen(3000);