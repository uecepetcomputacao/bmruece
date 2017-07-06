angular.module('starter')
.controller('ListagemController', function($scope) {

	$scope.listaDeApps = [
		{
			rotas: "biblioteca",
			nome: "Biblioteca", 
			imagem: "img/icon_biblioteca.png",
			descricao: "Saiba mais sobre a biblioteca da UECE"
		},

		{
			rotas: "mapas",
			nome: "Mapas",
			imagem: "img/icon_mapa.png",
			descricao: "Saiba mais sobre o mapa da UECE"
		},

		{
			rotas: "restauranteuniversitario",
			nome: "Restaurante Universitario",
			imagem: "img/icon_restaurante.png",
			descricao: "Saiba mais sobre o restaurante da UECE"
		}
	];
});

angular.module('starter')
.controller('BibliotecaController', function($scope, $stateParams){

	$scope.biblioteca = $stateParams.app;

});

angular.module('starter')
.controller('BibliotecaInformacaoController', function($scope, $stateParams){

	$scope.biblioteca = $stateParams.app;

});

angular.module('starter')
.controller('RestauranteUniversitarioController', function($scope, $stateParams){

	$scope.restauranteuniversitario = $stateParams.app;

});

angular.module('starter')
.controller('MapasContatoController', function($scope, $stateParams){

	$scope.mapasContato = $stateParams.app;

});

angular.module('starter')
.controller('MapasController', function($scope, $stateParams){

	$scope.mapas = $stateParams.app;

});