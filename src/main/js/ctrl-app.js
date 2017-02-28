var temp = require('./app');

temp.controller('appCtrl',
    ['$scope',
        function($scope){
            console.log('appCtrl');
        }
    ]
);
