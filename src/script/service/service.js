/*
 * Author：Xavier;
 * Create  Time：2018-01-10 09:47;
 * Description：
 */
angular.module('app').service('myService',function($http){
    this.getCode=function(url){
        /*
        *  $http.get请求封装
        *  @param   param $http.get请求url参数
        * */
        var args='https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/'+url;
        return $http.get(args);
    };
});