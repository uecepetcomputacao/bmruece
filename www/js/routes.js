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

	.state('bibliotecaContato', {
		url: '/bibliotecaContato',
		templateUrl: 'templates/bibliotecaContato.html',
		controller: 'BibliotecaContatoController'
	})


	.state('bibliotecaResultadoPesquisa', {
		url: '/bibliotecaResultadoPesquisa',
		templateUrl: 'templates/bibliotecaResultadoPesquisa.html',
		controller: 'BibliotecaResultadoPesquisaController'
	})

	.state('bibliotecaLivroSelecionado', {
		url: '/bibliotecaLivroSelecionado:livro',
		templateUrl: 'templates/bibliotecaLivroSelecionado.html',
		controller: 'BibliotecaLivroSelecionadoController'
	})

	.state('bibliotecaHome', { //rota criada pelo rafael. Acredito que esta rota não tenha utilidade. Aurelio
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

	.state('mapasContato', {
		url: '/mapasContato',
		templateUrl: 'templates/mapasContato.html',
		controller: 'MapasContatoController'
	})


});