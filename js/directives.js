'use strict';
/*global angular*/

angular.module('ScrollTest.directives', [])

  .directive('scroller', function () {
    return {restrict: 'E',
     replace: 'true',
     templateUrl: 'partials/infinite_scroll.html',
     scope: {
      contents: '=contents'

    }

  };
  });