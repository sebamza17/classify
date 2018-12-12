controllers.controller("HomeCtrl", [
    '$scope',
    '$timeout',
    function ($scope, $timeout) {

        //Base controller data
        $scope.data = {
            index: [
                {
                    name: '_helpers.less',
                    description: 'Whatever you may need (as helper classes) can be found in this file, like margins, paddings, text alignment classes, vertical aligment helpers, image ratio constrainers, structural helpers (like displays, positions), styling helpers (borders, border radius)',
                    icon: 'extension',
                    link: 'helpers'
                },
                {
                    name: '_components.less',
                    description: 'Pre-built components to make your life and coding much easier',
                    icon: 'build',
                    link: 'components'
                },
                {
                    name: '_fonts.less',
                    description: 'Contains font classes that can help you handle text in many ways. Also contains multiple @media rules to improve text readability on responsive and retina sizes',
                    icon: 'font_download',
                    link: 'fonts'
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