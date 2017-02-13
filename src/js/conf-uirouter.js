var temp = require('./app.js');

temp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/view1');

        $stateProvider
            .state('view1', {
                url: '/view1',
                templateUrl: "view/view1/view1.html",
                controller: "view1Ctrl"
            })
            .state('view2', {
                url: '/view2',
                templateUrl: "view/view2/view2.html",
                controller: "view2Ctrl"
            });
    }
]);
