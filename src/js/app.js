// import angular from 'angular';
// var myApp = angular.module("myApp", []);
// myApp.controller("CtrlOne", function ($scope) {
//   $scope.name = "Sumi";
// });

import angular from 'angular'

const myApp = angular.module("myFirstModule", []);
myApp.controller("firstModule_Controller_One", function($scope) {
  $scope.name = "Nothing to show";
  $scope.stime = "00:00";
  $scope.etime = "00:00";
  $scope.tdate = "dd/mm/yyyy";
  $scope.errorMessage = "No Error";
  $scope.isErrorActive = false;
  $scope.tasks = [];

  $scope.printTypedName = function() {
    if (!$scope.input_box_1) {
      $scope.errorMessage = "Please type event";
      $scope.isErrorActive = true;
    } 
    else if(!$scope.input_box_2){
      $scope.errorMessage = "Please type time";
      $scope.isErrorActive = true;
    }
    else if(!$scope.input_box_3){
      $scope.errorMessage = "Please type time";
      $scope.isErrorActive = true;
    }
    else if(!$scope.input_box_4){
      $scope.errorMessage = "Please type date";
      $scope.isErrorActive = true;
    }
    else {
    const obj = {
      name:$scope.input_box_1,
      stime: $scope.input_box_2,
      etime: $scope.input_box_3,
      tdate: $scope.input_box_4
    }
      $scope.tasks.push(obj)
    }

  }

  
});

