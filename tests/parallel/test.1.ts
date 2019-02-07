// const puppeteer = require("puppeteer");

describe("WDIO", function() {
  it("DEBUG NODEJS #1", function() {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("3");
    someFunction();

    browser.pause(1000);
  });

  // it("DEBUG CHROME #2", function() {
  //   browser.url('/')
  //   const devtoolsurl = `ws://ip-5236.sunline.net.ua:4444/devtools/${
  //     browser.sessionId
  //   }`;
  //   console.log(`DevTools url ${devtoolsurl}`);
  //   // await puppeteer.launch({ devtools: true });
  //   // ws://ip-5236.sunline.net.ua:4444/devtools/e56ac64d90183c1b49a8fb464f10631f
  //   // console.log('ws://selenoid.example.com:4444/devtools/<session-id>')
  //   browser.pause(100000);
  // });
});

function someFunction() {
  console.log("we are inside!");
  console.log("going out!");
}
