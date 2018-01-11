/*
 * Author：Xavier;
 * Create  Time：2018-01-11 09:10;
 * Description：
 */
angular.module('app').directive('postDetailsList',function () {
   return {
       restrict:'EA',
       replace:true,
       templateUrl:'view/template/postDetails-list.html',
       scope:{
           data:'='
       }
   };
});