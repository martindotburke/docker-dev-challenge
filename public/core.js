var devChallenge = angular.module('devChallenge', []);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.inputURLs = [];

    $scope.top10 = [ 
        {name: "test", score: "32429"},
        {name: "test", score: "32428"},
        {name: "test", score: "32427"},
        {name: "test", score: "32426"},
        {name: "test", score: "32425"},
        {name: "test", score: "32424"},
        {name: "test", score: "32423"},
        {name: "test", score: "32422"},
        {name: "test", score: "32421"},
        {name: "test", score: "32420"},
        {name: "test", score: "32413"}
    ];

    // load input URLs
    $scope.isInputsEmpty = function() {
        return $scope.inputURLs.length <= 0;
    };

    // load input URLs
    $scope.loadInputs = function() {
        $http.post('/api/input', $scope.inputURLs)
            .success(function(data) {
                //process the files
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // add input URL
    $scope.addInput = function() {
        $scope.inputURLs.push ($scope.formData);
        $scope.formData = {};
    };

    // clear input URLs
    $scope.clearInputs = function() {
        $scope.inputURLs = [];
    };

    // set date
    $scope.setDate = function(id) {
        $http.post('/api/date', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.data = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}