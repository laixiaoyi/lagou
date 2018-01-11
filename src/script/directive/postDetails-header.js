angular.module('app').directive('postDetailsHeader',function () {
   return {
       restrict:'EA',
       replace:true,
       templateUrl:'view/template/postDetails-header.html',
       scope:{
           data:'@'
       },
       controller:function ($scope) {
           $scope.retreat=function () {
               window.history.go(-1);
           };
       }
   };
});