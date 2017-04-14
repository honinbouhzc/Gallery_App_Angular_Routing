/*we used Angular's $routeParams to retrieve id from the URL by using $routeParams.id. Notice that we injected both $routeParams and the photos service into the PhotoController dependency array to make them available to use inside the controller.
Then to fetch an individual photo, we first used the photos service to fetch the array of photos from the server, and then used $routeParams.id to access the specific photo by its index
As before, any properties attached to $scope become available to use in the view. This means in photo.html, we can display the photo's detail using expressions as done before.*/
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);