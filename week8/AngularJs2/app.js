// Define AngularJS Application
var app = angular.module("studentApp", []);

// Define Controller
app.controller("StudentController", function($scope) {
    $scope.students = [];

    // Add Student Function
    $scope.addStudent = function() {
        if ($scope.studentForm.$valid) {
            $scope.students.push(angular.copy($scope.newStudent));
            $scope.newStudent = {};
            $scope.studentForm.$setPristine(); // Reset form state
        }
    };

    // Edit Student Function
    $scope.editStudent = function(student) {
        $scope.selectedStudent = angular.copy(student);
        $scope.editMode = true;
    };

    // Update Student Function
    $scope.updateStudent = function() {
        for (let i = 0; i < $scope.students.length; i++) {
            if ($scope.students[i].name === $scope.selectedStudent.name) {
                $scope.students[i] = angular.copy($scope.selectedStudent);
                break;
            }
        }
        $scope.editMode = false;
        $scope.selectedStudent = {};
    };

    // Delete Student Function
    $scope.removeStudent = function(student) {
        let index = $scope.students.indexOf(student);
        if (index !== -1) {
            $scope.students.splice(index, 1);
        }
    };

    // Cancel Edit
    $scope.cancelEdit = function() {
        $scope.editMode = false;
    };
});
