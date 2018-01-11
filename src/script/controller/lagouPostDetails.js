/*
 * Author：Xavier;
 * Create  Time：2018-01-10 20:23;
 * Description：
 */
angular.module('app').controller('lagouPostDetails',function ($scope,myService) {
    myService.getCode('position-detail').then(function (res) {
       $scope.detailsList=res.data[$scope.id];
       // console.log(res.data[$scope.id]);
       // console.log($scope.id);
    });
});