describe("WDIO", function() {
  it("Should be alive", function() {
    browser.url("/");
    console.log("--Test passed!");
  });

  it("Searching element on the page", function() {
    browser.url("/");
    $('a[href*="popular-products"]').click();
    browser.pause(1000);
  });

  it("Searching elements on the page @SMOKE", function() {
    browser.url("/");
    const tabs = $$(".nav-tabs li");
    tabs.forEach(tab => {
      const text = tab.getText();
      console.log("Got text:", text);
      if (text === "Popular Products") {
        console.log("Clicking ", text);
        tab.click();
      }
      // can be optimized with .find()
    });
    browser.pause(1000);
  });

  it("Searching from element to element", function() {
    browser.url("/");
    const header = $("header");
    const cartLink = header.$("#cart a");
    cartLink.click();
    browser.pause(1000);

    
    // try {
    //   return $('div').isExisting()
    // } catch (err) {
    //   return false
    // } 
    
  });
});
