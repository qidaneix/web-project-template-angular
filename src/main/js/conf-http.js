var temp = require('./app');

temp.config(['$httpProvider',
    function ($httpProvider) {
        //修改data由Obj为Str
        //$httpProvider.defaults.paramSerializer = '$httpParamSerializerJQLike';
        $httpProvider.defaults.transformRequest = function (obj) {
            var str = [];
            for (var p in obj) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
            return str.join("&");
        };
        //修改请求头
        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        };
        //IE禁止缓存
        $httpProvider.defaults.headers.get = {
            'Cache-Control': 'no-cache'
        };
        $httpProvider.defaults.headers.get = {
            'Pragma': 'no-cache'
        };
        //Reset headers to avoid OPTIONS request (aka preflight)
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    }
]);
