'use strict';


describe('mainCtrl', function() {

  var httpBackend, controller, scope;

  beforeEach(module('whiteboardHostApp'));
  beforeEach(inject(function($httpBackend, $controller, $rootScope) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    controller = $controller('mainCtrl', {
      $scope: scope
    });

    httpBackend.when('GET', '/api/guests').respond([
                                                     {"name": "Ricky"},
                                                     {"name": "Julian"},
                                                     {"name": "Bubbles"}
                                                   ]);
  }));

  describe('getGuests', function() {
    it('provides an array of guests', function() {
      var guests;
      httpBackend.flush();
      guests = scope.guests;
      expect(guests.length).toEqual(3);
      expect(guests[1].name).toEqual('Julian');
    });
  });
});
