'use strict';

var directives = angular.module('directives', []);

directives.directive('title', ['$rootScope', '$timeout',
    function($rootScope, $timeout) {
        return {
            link: function() {
                var listener = function(event, toState) {
                    $timeout(function() {
                        $rootScope.title = (toState.data && toState.data.pageTitle) ? toState.data.pageTitle : 'Home';
                    });
                };
                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    }
])
.directive('ngGoogleLogin', function(){
    function Ctrl($env, $do, $scope, $rootScope){
        $scope.do = $do;
        console.log('Test Controller Google Button');
    }

    function Link(scope, element, attrs){
        //do something linking
        console.log('Go Action >> Google Button');
    }

    return {
        restrict : 'A',
        scope : {
            ngModel : '=',
            ngKey : '@',
            ngSecret : '@'
        },
        templateUrl : 'helpers/directives/google.login.button.html',
        controller : Ctrl, 
        link : Link
   }
})
.directive('ngTranslate', function(){
    function Link(scope, element, attrs){
        //do something linking
        console.log('Go Action');
    }

    return {
        restrict : 'A',
        scope : { },
        templateUrl : 'helpers/directives/idioms.bar.html',
        link : Link
   }
});