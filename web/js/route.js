Classify.config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/components', {
                templateUrl: 'templates/components.html',
                controller: 'ComponentCtrl'
            })
            .when('/info/:section', {
                templateUrl: function (params) {
                    return 'templates/info/' + params.section + '.html';
                },
                controller: 'InfoCtrl'
            })
            .when('/examples/:name', {
                templateUrl: function (params) {
                    return 'templates/examples/' + params.name + '.html';
                },
                controller: 'ExamplesCtrl'
            })
            .when('/test_01', {
                templateUrl: 'templates/tests/test_01.html',
                controller: 'TestCtrl'
            })
            .when('/smplblck', {
                templateUrl: 'templates/tests/video_blend.html',
                controller: 'TestCtrl'
            })
            .when('/playground', {
                templateUrl: 'templates/tests/playground.html',
                controller: 'PlaygroundCtrl'
            })
            .when('/cms-home-tabs', {
                templateUrl: 'templates/classes/home-tabs.html',
            })
            .when('/class-css-structure', {
                templateUrl: 'templates/classes/css-structure.html',
            });

        $routeProvider.otherwise('/');

    }]);
