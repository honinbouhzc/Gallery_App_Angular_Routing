var app = angular.module('GalleryApp', ['ngRoute']);
/*In app.js inside the app.config() method, we use Angular's $routeProvider to define the application routes.
We used .when() to map the URL / to to the controller HomeController and the template home.html. The HomeController uses the service js/services/photos.js to fetch the array of all photos from https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json and stores it into $scope.photos. The home.html uses ng-repeat to loop through each item in the photos array and display each photo.*/
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
/* we mapped a URL to PhotoController and photo.html. We added a variable part named id to the URL, like this: /photos/:id.*/	
    .when('/photos/:id', {
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
/*Otherwise if a user accidentally visits a URL other than /, we just redirect to / using .otherwise().
Now when a user visits /, a view will be constructed by injecting home.html into the <div ng-view></div> in index.html.*/	
    .otherwise({
      redirectTo: '/'
    });
});
