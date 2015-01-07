var App = angular.module('App', [
    'ngRoute',
    'controllers'
]);

App.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'IndexCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
        
        // Use the HTML5 History API
        $locationProvider.html5Mode(true);
    }
]);