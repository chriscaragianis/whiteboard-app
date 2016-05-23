
describe('Whiteboard host page', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/host');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual("Whiteboard App Host");
  });

  it('should list the provided guests', function() {
    var guests = element(by.css('.guest-list'));
    expect(guests.getText()).toContain('Bubbles');
  });

});
