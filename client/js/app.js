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
  $scope.courses = [
    {
      "name": "CMPS 211 Intro to Programming",
      "enrollmentCapacity": 20,
      "reservations": [
        {
          "reservationCapacity": 4,
          "sequenceId": "1",
          "effectiveStartDate": "2017-12-01"
        },
        {
          "reservationCapacity": 1,
          "sequenceId": "2",
          "effectiveStartDate": "2017-12-08"
        },
      ],
      "currentEnrollment": {
        "effectiveDate": "2017-12-06",
        "reservedSeatsEnrolled": 3,
        "openSeatsEnrolled": 5,
        "openSeatsAvailable": 10,
        "reservedSeatsAvailable": 2
      }
    }
  ];

  $scope.range = function(n) {
      return new Array(n);
  };

  // initializeCourses();
});