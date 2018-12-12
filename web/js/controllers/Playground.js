controllers.controller('PlaygroundCtrl', [
    '$scope',
    '$sce',
    function ($scope, $sce) {

        //Playground variables
        $scope.playground = {
            html: '',
            trustedHtml: ''
        };
        
        /**
         * 
         */
        $scope.$watch('playground.html', function () {
            console.log($scope.playground.html);
            $scope.playground.trustedHtml = $sce.trustAsHtml($scope.playground.html);
        });

    }]);


