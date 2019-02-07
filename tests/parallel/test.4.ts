describe("WDIO", function() {
  it("Searching element on the page", function() {
    browser.url("/");
    $('a[href*="popular-products"]').click();
    browser.pause(1000);
  });
});
