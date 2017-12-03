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
  $scope.message = 'test';
  ORSApi.getCourses().then((response) => {
    if (response.status === 200) {
      $scope.courses = response.data;
    } else {
      $scope.error = 'Error retrieving courses';
    }
  })
});