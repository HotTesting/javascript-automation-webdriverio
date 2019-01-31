describe("WDIO", function() {
  it("using .call to run external async code", function() {
    browser.url("/");
    console.log("BEFORE ASYNC OPERATION DONE!");
    let res = browser.call(function() {
      return new Promise((resolve, reject) => {
        setTimeout(function() {
          console.log("ASYNC OPERATION DONE!");
          resolve("SOME RETURNED DATA");
        }, 5000);
      });
    });
    console.log("AFTER ASYNC OPERATION DONE! GOT RESULT ", res);
    $('a[href*="popular-products"]').click();
    browser.pause(1000);
  });
});
