'use strict';
angular.module('app').controller('lagouSeek', function ($scope,myService) {
    myService.getCode('position-detail').then(function (res) {
        $scope.postSeek=res.data;
    });
});