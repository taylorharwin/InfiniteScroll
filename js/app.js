'use strict';
/*global angular*/

angular.module('ScrollTest', [
  'ScrollTest.controllers',
  'ScrollTest.directives',
  'ngRoute'
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

  .when('/', {templateUrl: 'partials/scaffold.html', controller: 'MainCtrl'});
}]);