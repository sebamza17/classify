var Classify = angular.module('Classify', [
    'ngAnimate',
    'ngRoute',
    'Classify.controller',
    'Classify.services',
    'Classify.enviroment',
    'Classify.directives'
]);

Classify.run();

Classify.filter("sanitize", ['$sce', function ($sce) {
        return function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    }]);

var controllers = angular.module('Classify.controller', []);
var services = angular.module('Classify.services', []);
var environment = angular.module('Classify.enviroment', []);
var directives = angular.module('Classify.directives', []);
