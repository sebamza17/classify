environment.constant('env', {
    api: 'http://localhost:8000/api/',
    http: 'http://localhost:8000/api/',
    user: "mdzRadio",
    pass: "2015$"
});
//
//environment.constant('env', {
//    'api': 'http://ec2-52-35-59-187.us-west-2.compute.amazonaws.com/api/',
//    'http': 'http://ec2-52-35-59-187.us-west-2.compute.amazonaws.com/api/',
//    "user": "mdzRadio",
//    "pass": "2015$"
//});

Classify.config([
    '$sceProvider',
    '$httpProvider',
    function ($sceProvider, $httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptorSvc');
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    }]);
