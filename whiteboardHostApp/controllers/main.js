'use strict';

angular.module('whiteboardHostApp')

.controller('mainCtrl', function($scope, guestService) {

  guestService.getGuests(function(response) {
    $scope.guests = response.data;
  });
});


