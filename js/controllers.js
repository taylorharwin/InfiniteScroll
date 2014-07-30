'use strict';
/*global angular*/

angular.module('ScrollTest.controllers', [])

.controller('MainCtrl', function ($scope) {

    $scope.dataA = [{name: 'Dog'}, {name: 'Cat'}, {name: 'Hamster'}];

    $scope.dataB = [{name: 'Bill'}, {name: 'Jane'}, {name: 'Alex'}];

    $scope.dataC = [{name: 'Lettuce'}, {name: 'Tomato'}, {name: 'Onion'}];

  
  });