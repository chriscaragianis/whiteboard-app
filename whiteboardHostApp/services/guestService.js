'use strict';

angular.module('whiteboardHostApp')

.service('guestService', function($http) {

  this.getGuests = function(callback) {
    $http.get('/api/guests')
      .then(callback);
  };

});
