'use strict';
/*global angular*/

// The scroller directive, defined below, handles all of the infinite scroll functionality. 
// The scrollability of the parent element--an unordered list -- is achieved with CSS, and the layout is established in the template html file.
// The scroll behavior is set with ng-repeat, which will automatically iterate and append the entirety of whatever collection it is passed.
// The specific scrollable contents are set each time an instance of the directive is called. 
// This is the main benefit of using a directive for this purpose.

angular.module('ScrollTest.directives', [])

  .directive('scroller', function () {
    return {restrict: 'E',
     replace: 'true',
     templateUrl: 'partials/infinite_scroll.html',
     scope: {
      contents: '=contents'
    },

    // Adding an event listener to detect when a scroll has reached the end of a list of available elements
    link: function (scope, element) {
      element.on('scroll', function (event) {
        var number = this.offsetHeight;
        if (this.scrollTop === this.scrollHeight - this.offsetHeight) {
          console.log('at Bottom');
        }
  
      });


    }

  };
  });