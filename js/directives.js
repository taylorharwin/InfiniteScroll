'use strict';
/*global angular*/

angular.module('ScrollTest.directives', [])

  .directive('scroller', function () {
    return {restrict: 'E',
     replace: 'true',
     template: '<h2 ng-repeat="stuff in contents"> {{stuff.name}}</h2>',
     scope: {
      contents: '=contents'
    }

  };
  });