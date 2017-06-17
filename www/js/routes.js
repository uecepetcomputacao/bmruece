angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/listagemApps');

	$stateProvider

	.state('listagemApps', {
		url: '/listagemApps',
		templateUrl: 'templates/listagemApps.html',
		controller: 'ListagemController'
	})

	.state('biblioteca', {
		url: '/biblioteca',
		templateUrl: 'templates/biblioteca.html',
		controller: 'BibliotecaController'
	})

	.state('bibliotecaInformacao', {
		url: '/bibliotecaInformacao',
		templateUrl: 'templates/bibliotecaInformacao.html',
		controller: 'BibliotecaInformacaoController'
	})

	.state('bibliotecaHome', {
		url: '/biblioteca',
		templateUrl: 'templates/biblioteca.html',
		controller: 'BibliotecaHomeController'
	})

	.state('restauranteuniversitario', {
		url: '/restauranteuniversitario',
		templateUrl: 'templates/restauranteuniversitario.html',
		controller: 'RestauranteUniversitarioController'
	})

	.state('mapas', {
		url: '/mapas',
		templateUrl: 'templates/mapas.html',
		controller: 'MapasController'
	})

});