'use strict';
/*global angular*/

// The scroller directive, defined below, handles all of the infinite scroll functionality. 
// The scrollability of the parent element--an unordered list -- is achieved with CSS, and the layout is established in the template html file.
// The scroll behavior is set with ng-repeat, which will automatically iterate and append the entirety of whatever collection it is passed.
// The specific scrollable contents are set each time an instance of the directive is called. 
// This is the main benefit of using a directive for this purpose.

angular.module('ScrollTest.directives', [])

  .directive('scroller', function ($timeout) {
    return {restrict: 'E',
     replace: 'true',
     templateUrl: 'partials/infinite_scroll.html',
     scope: {
      contents: '=contents',
      title: '=title',
      limit: '=limit'
    },

    link: function (scope, element) {
      console.log(scope.limit);

      // Makes a new array of information to be added to collection. Each item has a unique ID, to ensure that duplicate content isn't a problem, and to mimic content coming from a DB. This function is invoked within a setTimeout in order to roughly mock up an AJAX call. 
      // A realistic version of this app would make an ajax call with $http, or with a function on a REST service that has been injected

      scope.getNewContent = function (arr) {
        var maxId = arr[arr.length - 1].id + 1;
        var newArr = [];
        for (var i = 0; i <= 3; i++) {
          var item = arr[i];
          item.id = maxId
          newArr.push(item);
          maxId++;
        }
        return newArr;
      };

    // Adds an event listener to detect when a scroll has reached the end of the list of available elements. 
    // Could also detect when scroll is at a midpoint, in order to start loading while user still has content to view. Once this event occurs, set a boolean to indicate that new data is being loaded. Show something to the user indicating this, using ng-show.
      element.on('scroll', function (event) {
        if (this.scrollTop === this.scrollHeight - this.offsetHeight) {
          scope.loading = true;

          //Records the fact that new content is being loaded. Uses a random number between 0 and 1 second to mimic potential delay in getting data from server. This assumes the server would never drop a connection, which is most definitely generous
          var fakeDelay = Math.random() * 1000;

          $timeout(function () {
            scope.$apply(function () {
              scope.loading = false;
              var newContent = scope.getNewContent(scope.contents);

              angular.forEach(newContent, function (item) {
                scope.contents.push(item);

              //Checks total length of items in scrollbar. If it exceeds the limit for that particular scrollbar, start cutting items from the top of the list. Limit is customizable, and can be greater for content that consumes less local memory. The constant for when to cut has to be some number less than the total starting length of the array. My decision to hardcode "5" here is simply based on using dummy data in the controller

                if (scope.contents.length >= scope.limit) {
                  for (var i = 0; i <= 5; i ++) {
                    scope.contents.shift();
                  }
                }
              });
            });
  
          }, fakeDelay);
        }
      });


    }

  };
  });