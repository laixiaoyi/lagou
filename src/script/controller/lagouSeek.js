'use strict';
angular.module('app').controller('lagouSeek', function ($scope,$rootScope,myService) {
    myService.getCode('position-list').then(function (res) {
        $scope.postSeek=res.data;
    });
    $scope.myIndex=1;
    $scope.myFind=function (url,index) {
        $scope.myIndex=index;
        zzc.style.display='block';
        lagouSeekFind.style.display='block';
        myService.getCode(url).then(function (res) {
            $scope.findData=res.data;
        });
    };
    $scope.myHide=function () {
        zzc.style.display='none';
        lagouSeekFind.style.display='none';
    };
});