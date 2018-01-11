angular.module('app').directive('postFooter', function (myValue) {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl: 'view/template/postFooter.html',
       controller:function ($scope) {
           $scope.routerDate=myValue;
       }
   };
});