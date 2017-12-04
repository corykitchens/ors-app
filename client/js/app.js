angular.module('orsApp', [])

.service('ORSApi', function($http) {
  const url = `${document.location.origin}/api`;
  return {
    getCourses: () => {
      return $http.get(`${url}/courses`);
    }
  }
})

.controller('MainCtrl', ($scope, ORSApi) => {
  function initializeCourses() {
    ORSApi.getCourses().then((response) => {
      if (response.status === 200) {
        $scope.courses = response.data;
      } else {
        $scope.error = 'Error retrieving courses';
      }
    });
  }
  $scope.range = function(n) {
      return new Array(n);
  };

  initializeCourses();
});