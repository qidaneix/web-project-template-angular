var temp = require('./app');
var view1Temp = require('../view/view1/view1.html');
var view2Temp = require('../view/view2/view2.html');

temp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/view1');

        $stateProvider
            .state('view1', {
                url: '/view1',
                templateUrl: view1Temp,
                controller: "view1Ctrl"
            })
            .state('view2', {
                url: '/view2',
                templateUrl: view2Temp,
                controller: "view2Ctrl"
            });
    }
]);
