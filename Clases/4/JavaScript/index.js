var primerNombre;
var segundoNombre = 'pepe';

var persona = {
	nombre: 'unaPersona',
	edad: 25
}

var listado = [2,3,4,5,'Hola'];

var suma = function(numeroUno, numeroDos){
	var resultado = numeroUno + numeroDos;
	return resultado;
}

var resultado = suma(2, 2);
console.log(resultado); 

var Persona = function (nombre, apellido) {
	this.nombre = nombre;
	this.apellido = apellido;
}

Persona.prototype.barrio = 'once';

var juan = new Persona('Juani','Tone');
