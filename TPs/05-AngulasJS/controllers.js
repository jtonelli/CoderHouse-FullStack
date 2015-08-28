var mod = angular.module('myApp');

mod.controller('MenuCtrl',function($scope, $state){
	$scope.mostrarSeccionUno = function(){	
		$state.go('seccionUno');
	}

	$scope.mostrarSeccionDos = function(){	
		$state.go('seccionDos');
	}
});

mod.controller('SeccionUnoCtrl',function($scope){
	$scope.titulo = 'Seccion Uno';
	$scope.parrafo = 'Mostrando variables del $scope';
	$scope.itemUno = 'TP - Angular';	
	$scope.itemDos = 'Juan Tonelli';
	$scope.itemTres = '2015';
});

mod.controller('SeccionDosCtrl',function($scope){
	$scope.titulo = 'Seccion Dos';
	$scope.parrafo = 'Mostrando variables del $scope';
	$scope.itemUno = 'TP - Angular';	
	$scope.itemDos = 'Juan Tonelli';
	$scope.itemTres = '2015';
});