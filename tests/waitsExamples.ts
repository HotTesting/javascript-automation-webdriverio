describe('Waits', function () {
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
    
})
