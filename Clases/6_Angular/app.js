angular.module('myApp',['ui.router'])


angular.module('myApp').config(function($stateProvider,$urlRouterProvider){

	$stateProvider.state('seccionUno', {
	  url: "/seccionUno",
	  templateUrl: "templates/seccionUno.html",
	  controller:'SeccionUnoCtrl'
	})

	$stateProvider.state('seccionDos', {
	  url: "/seccionDos",
	  templateUrl: "templates/seccionDos.html",
	  controller:'SeccionDosCtrl'
	})

	$stateProvider.state('seccionTres', {
	  url: "/seccionTres",
	  templateUrl: "templates/seccionTres.html",
	  controller:'SeccionTresCtrl'
	})

	$urlRouterProvider.otherwise('/');
})