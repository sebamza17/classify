controllers.controller("ExamplesCtrl", [
    '$scope',
    '$timeout',
    function ($scope, $timeout) {

        //Base controller data
        $scope.data = {
            channelRed: 100,
            channelGreen: 200,
            channelBlue: 150,
            channelAlpha: 80,
            blendModes: [
                {
                    name: 'bg-blend-color'
                },
                {
                    name: 'bg-blend-color-burn'
                },
                {
                    name: 'bg-blend-color-dodge'
                },
                {
                    name: 'bg-blend-darken'
                },
                {
                    name: 'bg-blend-difference'
                },
                {
                    name: 'bg-blend-hard-light'
                },
                {
                    name: 'bg-blend-hue'
                },
                {
                    name: 'bg-blend-lighten'
                },
                {
                    name: 'bg-blend-luminosity'
                },
                {
                    name: 'bg-blend-multiply'
                },
                {
                    name: 'bg-blend-normal'
                },
                {
                    name: 'bg-blend-overlay'
                },
                {
                    name: 'bg-blend-saturation'
                },
                {
                    name: 'bg-blend-screen'
                },
                {
                    name: 'bg-blend-soft-light'
                }
            ]
        };

        /**
         * Controller init         
         */
        function init() {

        }

        //Controller execution
        init();

    }]);