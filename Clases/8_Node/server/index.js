var mdb = require('mongoose');
var urldb = 'mongodb://admin:admin@ds041581.mongolab.com:41581/tpairbnb';

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
		name: 'string', 
		edad: Number
	});

//El modelo - Entidad
var User = mdb.model('User', schema);

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
var query = {};
var update = {edad : 25};
var options = {multi: true};
User.update(query, update, options, function(err, docs){
	console.log(docs);
});

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
