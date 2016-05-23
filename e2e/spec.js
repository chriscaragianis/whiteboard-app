
describe('Whiteboard host page', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3000/host');
    expect(browser.getTitle()).toEqual("Whiteboard App Host");
  });
});
