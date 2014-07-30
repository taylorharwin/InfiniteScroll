'use strict';
/*global angular*/



angular.module('ScrollTest.controllers', [])

// This app has only one controller. Note that the Scroller directive has an isolate scope.

.controller('MainCtrl', function ($scope) {

  // Mock Data created for the purpose of this exercise. Each one is passed to a different instance of the infinite scroll directive

  $scope.dataA = [{id: 1, image: 'assets/kitten1.jpg'}, {id: 3, image: 'assets/kitten2.jpg'}, {id: 4, image: 'assets/kitten3.jpg'}, {id: 5, image: 'assets/lion1.jpeg'}, {id: 6, image: 'assets/lion2.jpeg'}, {id: 7, image: 'assets/lion3.jpeg'}, {id: 8, image: 'assets/tiger1.jpeg'} ];

  $scope.dataB = [{id: 1, text: 'Taylor'}, {id: 2, text: 'Jane'}, {id: 3, text: 'Alex'}, {id: 4, text: 'Steve'}, {id: 5, text: 'Bob'}, {id: 6, text: 'Aaron'}, {id: 7, text: 'Michael'}];

  $scope.dataC = [{id: 1, text: 'Lettuce'}, {id: 2, text: 'Tomato'}, {id: 3, text: 'Onion'}, {id: 5, text: 'Turkey'}, {id: 6, text: 'Wheat Bread'}, {id: 7, text: 'Sprouts'}, {id: 8, text: 'Avocado'}];


});