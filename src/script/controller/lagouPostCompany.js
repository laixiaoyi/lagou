/*
 * Author：Xavier;
 * Create  Time：2018-01-11 14:22;
 * Description：
 */
angular.module('app').controller('postCompanyList',function ($scope,myService) {
   myService.getCode('company').then(function (res) {
       $scope.postCompanyData=res.data[$scope.id];
   });
});