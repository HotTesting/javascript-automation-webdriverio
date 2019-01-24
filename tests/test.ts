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
  });

  it("Implicit waits", function() {
    browser.timeouts("implicit", 6000);
    browser.url("http://the-internet.herokuapp.com/dynamic_controls");

    $("#checkbox-example button").click();

    browser.pause(5000);
    const existing = browser.isExisting(
      '#checkbox-example #checkbox input[type="checkbox"]'
    );

    console.log("IS EXIST", existing);
  });

  it("Explicit waits", function() {
    // browser.timeouts("implicit", 6000);
    browser.url("http://the-internet.herokuapp.com/dynamic_controls");

    $("#checkbox-example button").click();

    browser.waitForExist(
      '#checkbox-example #checkbox input[type="checkbox"]',
      1,
      true
    ); // Wait for NOT present

    console.log(
      "IS EXIST",
      browser.isExisting('#checkbox-example #checkbox input[type="checkbox"]')
    );
  });

  it("OWN Explicit waits", function() {
    // browser.timeouts("implicit", 6000);
    browser.url("http://the-internet.herokuapp.com/dynamic_controls");

    $("#checkbox-example button").click();

    browser.waitUntil(
      function() {
        try {
          console.log("calling predicate");
          return !$(
            '#checkbox-example #checkbox input[type="checkbox"]'
          ).isExisting();
        } catch (err) {
          return true;
        }
      },
      6000,
      `Expeted element (#checkbox-example #checkbox input[type="checkbox"]) to disappear in 6 seconds but it does not`
    );

    console.log(
      "IS EXIST",
      browser.isExisting('#checkbox-example #checkbox input[type="checkbox"]')
    );
  });

  it.only("Explicit and IMPLICIT waits", function() {
    browser.timeouts("implicit", 5000);
    browser.url("http://the-internet.herokuapp.com/dynamic_controls");

    //$("#checkbox-example button").click();

    browser.waitUntil(
      function() {
        // try {
        //   console.log("calling predicate");
        //   return !$(
        //     '#checkbox-example #checkbox input[type="checkbox"]'
        //   ).isExisting();
        // } catch (err) {
        //   return true;
        // }
        console.log('Implicit timeout', browser.timeouts(undefined, undefined))
        console.log("calling predicate");
        return !browser.isExisting('#checkbox-example #checkbox input[type="checkbox"]')

      },
      2000,
      `Expeted element (#checkbox-example #checkbox input[type="checkbox"]) to disappear in 6 seconds but it does not`
    );

    console.log(
      "IS EXIST",
      browser.isExisting('#checkbox-example #checkbox input[type="checkbox"]')


    );

    browser.isExisting()
  });

});
