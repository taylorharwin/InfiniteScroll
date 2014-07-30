'use strict';
/*global angular*/

angular.module('ScrollTest.directives', [])

  .directive('scroller', function () {
    return {restrict: 'E',
     scope: true,
     replace: 'true',
     templateUrl: 'partials/infinite_scroll.html',

     link: function (scope) {
      scope.sayHi = function () {console.log('hi'); };
    }

  };
  });