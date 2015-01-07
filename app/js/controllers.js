var controllers = angular.module('controllers', []);

controllers.controller('IndexCtrl', ['$scope',
    function($scope) {
        console.log('Init controller');
        //$scope.load();

        $scope.load = function(){
            $scope.lang = window.lang;

            if(localStorage.lang == null){
                $scope.lang         = $scope.lang.es;
                localStorage.lang   = 'es';
            }else{
                $scope.lang = $scope.lang[localStorage.lang];
            }
        };

        $scope.changeLang = function(lang){
            if(lang === 'es' || lang === 'en'){
                $scope.lang         = $scope.lang[lang];
                localStorage.lang   = lang;
            }
        };

        $scope.navigate = function(id){
            $('html, body').stop().animate({
                scrollTop: $(id).offset().top
            }, 500);
        };
    }]
);

