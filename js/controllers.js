'use strict';
/*global angular*/

angular.module('ScrollTest.controllers', [])

// This app has only one controller. Note that the Scroller directive has its own isolate scope, but can also reach up to functions in this scope as well

.controller('MainCtrl', function ($scope) {

  // Mock Data created for the purpose of this exercise. Each of these is passed to a different instance of the infinite scroll controller

  $scope.dataA = [{image:"assets/kitten1.jpg"}, {image: "assets/kitten2.jpg"}, {image: "assets/kitten3.jpg"}, {image:"assets/lion1.jpeg"}, {image:"assets/lion2.jpeg"}, {image:"assets/lion3.jpeg"}, {image:"assets/tiger1.jpeg"} ];

  $scope.dataB = [{text: 'Bill'}, {text: 'Jane'}, {text: 'Alex'}, {text: 'Steve'}, {text: 'Bob'}, {text: 'Aaron'}, {text: 'Michael'}];

  $scope.dataC = [{text: 'Lettuce'}, {text: 'Tomato'}, {text: 'Onion'}, {text: 'Turkey'}, {text: 'Wheat Bread'}, {text: 'Sprouts'}, {text: 'Avocado'}];

  });