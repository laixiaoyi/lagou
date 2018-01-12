/**
 * Author：Xavier;
 * Create  Time：2018-01-12 11:28;
 * Description：
 */
angular.module('app').filter('myFilter',function () {
    return function (arr,key) {
        var output=[];
        if(key===''||key==='undefined'){
            return arr;
        }
        angular.forEach(arr,function (item) {
            //过滤数组中值与指定值相同的元素
            // console.log(item.cityId);
            if(item.cityId===key){
                output.push(item);
            }
            if(item.scaleId===key){
                output.push(item);
            }
            if(item.salaryId===key){
                output.push(item);
            }
        });
        return output;
    };
});