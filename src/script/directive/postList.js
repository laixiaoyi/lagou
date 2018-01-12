angular.module('app').directive('postList', function () {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'view/template/postList.html',
        scope:{
            data:'=',
            text:'='
        }
    };
});