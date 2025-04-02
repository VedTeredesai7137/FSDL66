// Define AngularJS Application
var app = angular.module("myApp", []);

// Define Controller
app.controller("HelloController", function($scope) {
    $scope.name = "World"; // Default value
});
