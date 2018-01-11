'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($s, $u) {
    $s.state('lagouPost', {
        url: '/lagouPost',
        templateUrl: 'view/lagouPost.html'
    })
    .state('lagouSeek',{
        url:'/lagouSeek',
        templateUrl:'view/lagouSeek.html'
    })
    .state('lagouMy',{
        url:'/lagouMy',
        templateUrl:'view/lagouMy.html'
    })
    .state('myRegister',{
       url:'/myRegister',
       templateUrl:'view/lagouMy-register.html'
    })
    .state('myLogin',{
        url:'/myLogin',
        templateUrl:'view/lagouMy-login.html'
    })
    .state('myLoginEnter',{
        url:'/myLoginEnter',
        templateUrl:'view/lagouMy-login-enter.html'
    })
    .state('lagouPostDetails',{
        url:'/lagouPostDetails/:id',
        templateUrl:'view/lagouPostDetails.html',
        controller:function ($stateParams,$scope) {
            $scope.id=$stateParams.id;
        }
    })
    .state('lagouPostCompany',{
        url:'/lagouPostCompany/:id',
        templateUrl:'view/lagouPostCompany.html',
        controller:function ($stateParams,$scope) {
            $scope.id=$stateParams.id;
            // console.log($scope.id);
        }
    });
    $u.otherwise('lagouPost');
}]);
