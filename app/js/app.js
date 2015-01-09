'use strict';

var App = angular.module('App', [
    'ui.router',
    'controllers',
    'directives',
    'factorys'
]);

App.config(['$locationProvider', '$urlRouterProvider', '$httpProvider', '$stateProvider',
    function($locationProvider, $urlRouterProvider, $httpProvider, $stateProvider) {

        // $httpProvider.interceptors.push(function(){
        //     // do some http request interception
        // });

        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'partials/login.html',
                controller  : 'IndexCtrl',
                data : { pageTitle : 'Input | Login' }
            })
            .state('signup', {
                url : '/signup',
                templateUrl : 'partials/signup.html',
                controller  : 'SignupCtrl',
                data : { pageTitle : 'Input | Sign Up' }
            })
            .state('inbox', {
                url : '/inbox',
                templateUrl : 'partials/dashboard.html',
                controller : 'DashboardCtrl',
                data : { pageTitle : 'Input | Inbox' }
            })
            .state('forms', {
                url : '/forms',
                templateUrl : 'partials/forms.html',
                controller : 'FormsCtrl',
                data : { pageTitle : 'Input | Forms' }
            })
            .state('form', {
                url : '/form',
                templateUrl : 'partials/form.html',
                controller : 'FormCtrl',
                data : { pageTitle : 'Input | Form' }
            })
            .state('sent', {
                url : '/sent',
                templateUrl : 'partials/sent.html',
                controller : 'SentCtrl',
                data : { pageTitle : 'Input | Sent' }
            });

            $urlRouterProvider.otherwise("/");
            
            // Use the HTML5 History API
            // $locationProvider.html5Mode(true);
    }
])
.run(function($rootScope, $state, $http){ //do something when app is loaded
    $rootScope.title = $state.title;

    /* Idioms */
    if(localStorage.lang == null){
        $rootScope.lang     = $lang.en;
        localStorage.lang   = 'en';
    }else{
        $rootScope.lang = $lang[localStorage.lang];
    }
});