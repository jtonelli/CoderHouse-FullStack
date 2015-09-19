var mdb = require('mongoose');

//Schema = Cuerpo del modelo.
var schema = new mdb.Schema({ 
		name:String, 
		lastName:String, 
		age:Number, 
		email:String, 
		password:String
	});

//El modelo - Entidad
module.exports = mdb.model('User', schema);;