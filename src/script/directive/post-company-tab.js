/**
 * Author：Xavier;
 * Create  Time：2018-01-11 18:39;
 * Description：
 */
angular.module('app').directive('postCompanyTab',function () {
   return {
       restrict:'EA',
       replace:true,
       templateUrl:'view/template/post-company-tab.html',
       scope:{
           data:'='
       },
       controller:function ($scope) {
           $scope.oIndex=0;
           $scope.myTab=function (index) {
                $scope.oIndex=index;
           };
       }
   };
});