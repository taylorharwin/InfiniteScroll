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
      contents: '=contents',
      title: '=title',
      limit: '=limit'
    },

    link: function (scope, element) {

      // Makes a new array of information to be added to collection. Each item has a unique ID, to ensure that duplicate content isn't a problem. This is tied to the ng-tracThis function is invoked within a setTimeout in order to roughly mock up an AJAX call. 
      // A realistic version of this app would make an ajax call with $http, or with a function on a REST service that has been injected

      scope.getNewContent = function (arr) {
        var maxId = arr[arr.length - 1].id + 1;
        var newArr = [];
        for (var i = 0; i <= 3; i++) {
          var item = arr[i];
          item.id = maxId
          newArr.push(item);
          console.log(item.id);
          maxId++;
        }
        return newArr;
      };

    // Adds an event listener to detect when a scroll has reached the end of the list of available elements. 
    // Could also detect when scroll is at some midpoint, in order to start loading while user still has content to view
      element.on('scroll', function (event) {
        if (this.scrollTop === this.scrollHeight - this.offsetHeight) {
          scope.$apply(function () {
            var newContent = scope.getNewContent(scope.contents);
            angular.forEach(newContent, function (item) {
              scope.contents.push(item);
            });
          });
        }
  
      });


    }

  };
  });