'use strict';

angular.module("whiteboardHostApp", []);

'use strict';

angular.module('whiteboardHostApp')
.controller('mainCtrl', function($scope, guestService) {

  guestService.getGuests(function(response) {
    $scope.guests = response.data;
  });
});



'use strict';

angular.module('whiteboardHostApp')

.service('guestService', function($http) {

  this.getGuests = function(callback) {
    $http.get('/api/guests')
      .then(callback);
  };

});
