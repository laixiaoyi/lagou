angular.module('app').directive('postDetailsHeader',function () {
   return {
       restrict:'EA',
       replace:true,
       templateUrl:'view/template/postDetails-header.html'
   };
});