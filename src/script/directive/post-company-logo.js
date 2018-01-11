/*
 * Author：Xavier;
 * Create  Time：2018-01-11 15:13;
 * Description：
 */
angular.module('app').directive('postCompanyList',function () {
    return {
      restrict:'EA',
      replace:true,
      templateUrl:'view/template/postCompanyList.html',
      scope:{
          data:'='
      }
    };
});