'use strict';
angular.module('app').controller('lagouPost', function ($scope,myService) {
   myService.getCode('position-list').then(function (res) {
       // console.log(res);
       $scope.postList=res.data;
   });
});