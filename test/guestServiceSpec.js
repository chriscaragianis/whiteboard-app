'use strict';
describe('guestService', function() {

  var guestService, httpBackend;

  beforeEach(module('whiteboardHostApp'));
  beforeEach(inject(function(_guestService_, $httpBackend) {
    httpBackend = $httpBackend;
    guestService = _guestService_;

    httpBackend.when('GET', '/api/guests').respond(guestData);
  }));

  describe('getGuests', function() {
    it('provides an array of guests', function() {
      var guests;

      guestService.getGuests(function(response) {
        guests = response.data;
      });
      httpBackend.flush();
      expect(guests.length).toEqual(3);
      expect(guests[1].name).toEqual('Julian');
    });
  });
});
