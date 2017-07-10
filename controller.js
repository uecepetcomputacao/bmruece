angular.module('starter')
.controller('ListagemController', function($scope) {

	$scope.listaDeDias = [
		{
			rotas: "segunda",
			nome: "Segunda", 
			imagem: "img/icon_restaurante.png",
			descricao: "Saiba mais sobre a Segunda"
		},

		{
			rotas: "terca",
			nome: "Terca", 
			imagem: "img/icon_restaurante.png",
			descricao: "Saiba mais sobre a Terça"
		},

		{
			rotas: "quarta",
			nome: "Quarta", 
			imagem: "img/icon_restaurante.png",
			descricao: "Saiba mais sobre a Quarta"
		},

		{
			rotas: "quinta",
			nome: "Quinta", 
			imagem: "img/icon_restaurante.png",
			descricao: "Saiba mais sobre a Quinta"
		},

		{
			rotas: "sexta",
			nome: "Sexta", 
			imagem: "img/icon_restaurante.png",
			descricao: "Saiba mais sobre a Sexta"
		},

		{

			rotas: "menu",
			nome: "menu", 
			imagem: "img/icon_restaurante.png",
			descricao: "Saiba mais sobre a Sexta"
		}


		];
});

angular.module('starter')
.controller('SegundaController', function($scope, $stateParams){

	$scope.segunda = $stateParams.app;

});

angular.module('starter')
.controller('TercaController', function($scope, $stateParams){

	$scope.terca = $stateParams.app;

});

angular.module('starter')
.controller('QuartaController', function($scope, $stateParams){

	$scope.quarta = $stateParams.app;

});

angular.module('starter')
.controller('QuintaController', function($scope, $stateParams){

	$scope.quinta = $stateParams.app;

});

angular.module('starter')
.controller('SextaController', function($scope, $stateParams){

	$scope.sexta = $stateParams.app;

});

angular.module('starter')
.controller('RuInformacaoController', function($scope, $stateParams){

	$scope.ruInformacao = $stateParams.app;

});

angular.module('starter')
.controller('ContatoController', function($scope, $stateParams){

	$scope.contato = $stateParams.app;

});

angular.module('starter')
.controller('MenuController', function($scope, $stateParams){

	$scope.menu = $stateParams.app;

});
