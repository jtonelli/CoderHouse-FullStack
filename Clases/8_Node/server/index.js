var mod = require('./myModulo');
var om = require('./OtroModulo');

var fs = require('fs');
var ld = require('lodash');

var saludo = 'Hola';

var saludar = function() {
	return 'Hola mundo';
};

fs.writeFile('message.txt', 'Hello Node',
	function(err){
		if(!err){
			console.log('Se guardo!!');
		}else{
			console.log('Error');
		}
});


console.log(ld.now());
console.log(mod);
console.log(om);
