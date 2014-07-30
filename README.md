Infinite Scroll Angular Directive
=========

This repo contains a simple Angular app that showcases a custom "Scroller" directive. The directive can be cusomized with a data source from its parent scope, a title, and some limit of how many total items can be in an infinite scroll list at any time. The directive automatically takes care of trimming the scroll container to this number, and providing user notification about new content being loaded.

Note: This beta version refreshes data by simply grabbing a new chunk of whatever data was originally bound to the directive. It simulates AJAX calls by creating a randomly-timed delay whenever a user hits the bottom of a scroll container. It should not be considered production-ready.

Version
----

0.0.1

Overview of the Repo
-----------

This repo contains: 
* A basic Angular app -- One app.js file, One controller, one route ('/')
* The custom directive (found in js/directives.js)
* HTML template for a "scaffold" containing one or many infinite scroll directives as html elements
* HTML template for any instance of the directive
* A simple CSS file to provide styling for the scroll box and its contents
* An assets/ directory containing .jpg images of cats used to demonstrate infinite image loading
* A Bower.json file for tracking dependencies (Bootstrap, Angular, and Angular Router so far). Although jQuery will be installed with Bootstrap, it is not used in this project

How to run
--------------

1. Fork this repo and clone it locally
2. cd to the directory you cloned to, and run "bower install" (must install bower if you haven't already)
3. From within the same directory, start a local simple server using "python -m SimpleHTTPServer". This should automatically serve index.html for this project.
4. Navigate to http://localhost:8000 (or your local equivalent). 
    *Note: You should see three columns with three infinitely scrollable lists. If you don't see this, please reach out to the author:

Taylor Harwin. (taylor.harwin@gmail.com) @taylorharwin




Additional Notes
--------------
The code for this project is heavily commented, so must of the tutorial information is in the project itself. It is worth noting that the design is meant to be highly modular (the directive can be used anywhere in an application, and will automatically fill whatever container it's placed in. This project uses Bootstrap's grid layout to handle design responsivity. 

Please submit pull requests to improve this project, and/or let me know how I could improve upon it. Happy scrolling!


License
----

MIT
