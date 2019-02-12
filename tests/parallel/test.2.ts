describe("WDIO", function() {
  it("Searching element on the page 1", function() {
    
    console.log("11");
    console.log("22");
    console.log("33");
    console.log("33");
    browser.url("/");
    $('a[href*="popular-products"]').click();
    browser.pause(1000);
  });
});
