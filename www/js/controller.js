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

	$scope.bibliotecaInfo = $stateParams.app;

});

angular.module('starter')
.controller('BibliotecaContatoController', function($scope, $stateParams){

	$scope.bibliotecaContato = $stateParams.app;

});

angular.module('starter')
.controller('BibliotecaResultadoPesquisaController', function($scope, $stateParams){

	//$scope.bibliotecaResultado = $stateParams.app;
	$scope.livrosResultado = [
		{
			titulo: "Sistema Operacionais Modernos",
			subtitulo: "",
			autor: "Tanenbaum e Bos",
			autorCompleto: "Andrew S. Tanenbaum e Herbert Bos",
			edicao: "4",
			editora: "Pearson Education",
			idioma: "Inglês",
			ano: "2016",
			assunto: "Computação",
			origem: "Internacional"
		},

		{
			titulo: "Cálculo",
			subtitulo: "",
			autor: "Rogawski",
			autorCompleto: "Jon Rogawski",
			edicao: "2",
			editora: "Artmed",
			idioma: "Português",
			ano: "2009",
			assunto: "Ciencias Exatas-Matematica",
			origem: "Nacional"
		},

		{
			titulo: "Iniciacao A Lógica Matemática",
			subtitulo: "",
			autor: "Alencar Filho",
			autorCompleto: "Edgar de Alencar Filho",
			edicao: "21",
			editora: "Nobel",
			idioma: "Português",
			ano: "",
			assunto: "Ciencias Exatas",
			origem: "Nacional"
		},

		{
			titulo: "Organização e Projeto de Computadoresssssssssssss haha",
			subtitulo: "A interface hardware/software",
			autor: "Patterson e Hennessy",
			autorCompleto: "David A. Patterson e John L. Hennessy",
			edicao: "4",
			editora: "Elsevier",
			idioma: "Português",
			ano: "2014",
			assunto: "Computação",
			origem: "Internacional"
		}
	];

});

angular.module('starter')
.controller('BibliotecaLivroSelecionadoController', function($scope, $stateParams){

	$scope.bibliotecaLivro = angular.fromJson($stateParams.livro);

});


angular.module('starter') //controller criada pelo rafael. Acredito que esta controller não tenha utilidade. Aurelio
.controller('BibliotecaHomeController', function($scope, $stateParams){

	$scope.bibliotecaHome = $stateParams.app;

});

angular.module('starter')
.controller('RestauranteUniversitarioController', function($scope, $stateParams){

	$scope.restauranteuniversitario = $stateParams.app;

});

angular.module('starter')
.controller('MapasController', function($scope, $stateParams, $cordovaGeolocation){

	$scope.mapas = $stateParams.app;

	var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(-3.789656, -38.553671);


    var mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

		//esperar até o mapa ser carregado
	google.maps.event.addListenerOnce($scope.map, 'idle', function(){

		//REITORIA ---------------------------------------------------
		var reitoria = new google.maps.Marker({
				map: $scope.map,
				animation: google.maps.Animation.DROP,
				position: new google.maps.LatLng(-3.785940, -38.552467)
		});

		var infoReitoria = new google.maps.InfoWindow({
			content: "Reitoria"
		});

		google.maps.event.addListener(reitoria,'click', function (){
			infoReitoria.open($scope.map, reitoria)
		});

		//PETs ---------------------------------------------------
		var pets = new google.maps.Marker({
				map: $scope.map,
				animation: google.maps.Animation.DROP,
				position: new google.maps.LatLng(-3.786976, -38.553992)
		});

		var infoPets = new google.maps.InfoWindow({
			content: "PETs"
		});

		google.maps.event.addListener(pets,'click', function (){
			infoPets.open($scope.map, pets)
		});

	});

  }, function(error){
    console.log("Could not get location");
  });

});

angular.module('starter')
.controller('MapasContatoController', function($scope, $stateParams){

	$scope.mapasContato = $stateParams.app;

});
