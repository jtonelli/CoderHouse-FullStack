var mod = angular.module('myApp', [])

//invocar al modulo myApp
mod.controller('BuscadorCtrl', function($scope){
	$scope.test = 'Hola que tal?';
	$scope.clickBoton = function(){
		console.log('Hola!!! ' + $scope.nombre);
	}

	$scope.$watch('nombre', function(newValue, oldValue){
		console.log('valor viejo: ', oldValue);
		console.log('valor nuevo: ', newValue);
	})
})