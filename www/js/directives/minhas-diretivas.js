angular.module('minhasDiretivas', [])
    .directive('bibliotecaFooterBar', function() {
        
        var ddo = {}; //diretiva de definição do objeto

        ddo.restrict = "AE"; //tag ou elemento

        // lista de botões para seleção de um estado
        ddo.templateUrl = "js/directives/biblioteca-footer-bar.html"                

        return ddo;
    });