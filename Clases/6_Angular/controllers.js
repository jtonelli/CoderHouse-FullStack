var mod = angular.module('myApp');

mod.controller('MenuCtrl',function($scope, $state){
	$scope.mostrarSeccion = function(nombreSeccion){	
		$state.go(nombreSeccion);
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


mod.controller('SeccionTresCtrl',function($scope, $http){
	$scope.busqueda = 'iphone';

	$scope.buscar = function(){
		var url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + $scope.busqueda + '&limit=10';
		$http.get(url).then(function(r){
			$scope.resultados = r.data.results;
			$scope.cantResultados = r.data.paging.total;
		});
	}
});