angular.module('app').directive('postHeader', function () {
   return {
       restrict: 'EA',
       replace: true,
       templateUrl: 'view/template/postHeader.html'
   };
});