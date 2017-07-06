angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/listagemDias');

	$stateProvider


 .state('menu', {
      url:'/menu',
      //abstract: true,
      templateUrl:'templates/menu.html',
      controller:'MenuController'
      	
      
    })

	.state('listagemDias', {
		url: '/listagemDias',
		templateUrl: 'templates/listagemDias.html',
		controller: 'ListagemController'
	})

    .state('segunda', {
		url: '/segunda',
		templateUrl: 'templates/segunda.html',
		controller: 'SegundaController'
	})

	.state('terca', {
		url: '/terca',
		templateUrl: 'templates/terca.html',
		controller: 'TercaController'
	})

	.state('quarta', {
		url: '/quarta',
		templateUrl: 'templates/quarta.html',
		controller: 'QuartaController'
	})

	.state('quinta', {
		url: '/quinta',
		templateUrl: 'templates/quinta.html',
		controller: 'QuintaController'
	})

	.state('sexta', {
		url: '/sexta',
		templateUrl: 'templates/sexta.html',
		controller: 'SextaController'
	})
	

	.state('ruInformacao', {
		url: '/ruInformacao',
		templateUrl: 'templates/ruInformacao.html',
		controller: 'RuInformacaoController'
	})

	.state('contato', {
		url: '/contato',
		templateUrl: 'templates/contato.html',
		controller: 'ContatoController'
	})
	
});