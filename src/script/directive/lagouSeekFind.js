/**
 * Author：Xavier;
 * Create  Time：2018-01-11 23:08;
 * Description：
 */
angular.module('app').directive('lagouSeekFind',function () {
   return {
       restrict:'EA',
       replace:true,
       templateUrl:'view/template/lagouSeekFind.html',
       scope:{
           data:'=',
           fn:'&'
       },
       controller:function ($scope,$rootScope) {
           $rootScope.findId='';
            $scope.ifFind=function (index) {
                $rootScope.findId=$scope.data[index].id;
                // console.log($rootScope.findId);
            };
       }
   };
});