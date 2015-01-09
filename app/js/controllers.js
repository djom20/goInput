'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('IndexCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('Init controller');

        $scope.load = function(){
            console.log('status', $splash_status);

            if(!$splash_status){
                $splash_status = true;
                setTimeout(function(){
                    console.log('Init setTimeout');
                    $('.splash_screen').fadeOut(2000, function(){
                        console.log('Hide Logo');
                        $('.login').fadeIn(1000);
                    });
                }, 1000);
            } else {
                $('.splash_screen').css('display', 'none');
                $('.login').css('display', 'block');
            }
        };

        // $scope.changeLang = function(lang){
        //     if(lang === 'es' || lang === 'en'){
        //         $scope.lang         = $scope.lang[lang];
        //         localStorage.lang   = lang;
        //     }
        // };

        $scope.navigate = function(id){
            $('html, body').stop().animate({
                scrollTop: $(id).offset().top
            }, 500);
        };

        $scope.load();
    }]
);

controllers.controller('LoginCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.onLogin = function(){
            console.log('Login click');
            // setTimeout(function(){
                console.log('Reload Page');
                $location.path('/inbox').replace();
            // }, 100);
        };
    }]
);

controllers.controller('SignupCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.onLogin = function(){
            console.log('Init controller');
        };
    }]
);

controllers.controller('MenuCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.status_menu = false;

        $scope.toggleMenu = function(){
            if(!$scope.status_menu){
                $scope._open();
            } else {
                $scope._closed();
            }
            $('.main-menu').blur();
        };

        $scope.linkTo = function(link){
            if(link == "close") $location.path("/").replace();
            $location.path(link).replace();
            $scope._closed();
        };

        $scope._open = function(){
            $scope.status_menu  = true;
            $('.sidemenu').removeClass('_closed').addClass('_open');
            $('#page-top').removeClass('_closed').addClass('_open');
        };

        $scope._closed = function(){
            $('.sidemenu').removeClass('_open').addClass('_closed');
            $('#page-top').removeClass('_open').addClass('_closed');
            $scope.status_menu  = false;
        };
    }]
);

controllers.controller('DashboardCtrl', ['$scope', '$location',
    function($scope, $location) {
        console.log('Init controller');

        $scope.list = [
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Jhon Smmith"},
            {"name": "Raul Smmith"}
        ];
    }]
);

controllers.controller('FormsCtrl', ['$scope', '$location',
    function($scope, $location) {
        console.log('Init controller');

        $scope.list = [
            {"name": "Google"},
            {"name": "Google"},
            {"name": "Google"},
            {"name": "Google"},
            {"name": "Google"},
            {"name": "Google"},
            {"name": "Soluntech"},
            {"name": "Soluntech"},
            {"name": "Soluntech"},
            {"name": "Soluntech"},
            {"name": "Opercar"},
            {"name": "Opercar"},
            {"name": "Opercar"},
            {"name": "Opercar"},
            {"name": "Opercar"},
            {"name": "Public"}
        ];
    }]
);

controllers.controller('FormCtrl', ['$scope', '$location',
    function($scope, $location) {
        console.log('Init controller');
    }]
);

controllers.controller('IdiomsCtrl', ['$scope', '$rootScope', '$location',
    function($scope, $rootScope, $location) {
        $scope.changeLang = function(lang){
            if(lang === 'es' || lang === 'en'){
                $rootScope.lang     = $lang[lang];
                localStorage.lang   = lang;
            }
        };
    }]
);

controllers.controller('SentCtrl', ['$scope', '$location',
    function($scope, $location) {
        console.log('Init controller');
    }]
);

