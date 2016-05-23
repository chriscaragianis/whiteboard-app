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

    httpBackend.when('GET', '/api/guests').respond(guestData);
  }));

  describe('getGuests', function() {
    var guests;
    beforeEach(function() {
      httpBackend.flush();
      guests = scope.guests;
    });

    it('provides an array of guests', function() {
      expect(guests.length).toEqual(3);
    });

    it('provides the correct names', function() {
      expect(guests[1].name).toEqual('Julian');
    });

    it('provides the correct colors', function() {
      expect(guests[1].color).toEqual('orange');
    });
  });
});
