declare const user1;
declare const user2;

describe("WDIO", function() {
  it("low level actions - mouse move", function() {
    browser.url("http://the-internet.herokuapp.com/hovers");
    let avatars = $$(".figure");
    avatars.forEach((avatar, indx) => {
      avatar.moveToObject();
      browser.pause(3000);
      console.log(indx + " Got text: " + avatar.$(".figcaption h5").getText());
    });
  });

  it("low level actions - key press", function() {
    browser.url("http://the-internet.herokuapp.com/key_presses");
    
    browser.pause(1000)
    browser.keys(['Shift'])
    browser.pause(1000)
    browser.keys(['Tab'])
    browser.pause(5000)
  });

  it("low level actions - drag and drop", function() {
    browser.url("http://the-internet.herokuapp.com/drag_and_drop");
    let a = "#column-a";
    let b = "#column-b";
    $(a).moveToObject();
    browser.pause(500);
    browser.buttonDown(0);
    browser.pause(500);
    $(b).moveToObject();
    browser.pause(500);
    browser.buttonUp(0);
    browser.buttonUp(0);
    browser.pause(5000);
    console.log("A", $(a).getText());
    console.log("B", $(b).getText());

    // browser.dragAndDrop(b, a)
    // browser.pause(5000)
    // console.log('A', $(a).getText())
    // console.log('B', $(b).getText())
  });

  it("Multiremote", function() {
    user1.url("https://socketio-chat-example.now.sh/");
    user2.url("https://socketio-chat-example.now.sh/");
    user1.pause(1000);
    user2.pause(1000);
    user1.$("input#m").setValue("Hello world!");
    user1.$("button=Send").click();
    user2.$("input#m").setValue("Hello world! 2");
    user2.$("button=Send").click();

    browser.pause(10000);

    console.log("Messages", browser.getText("ul#messages"));
  });

  it("add command", function() {
    // http://v4.webdriver.io/api/utility/addCommand.html
    browser.addCommand("getUrlAndTitle", function(customVar) {
      return {
        url: this.getUrl(),
        title: this.getTitle(),
        customVar: customVar
      };
    });
    browser.url("http://www.github.com");
    var result = browser.getUrlAndTitle("foobar");
    console.log(result);

    //   browser.addCommand('waitForTextToAppear', function ({ selector, text, timeout, timeoutMsg, interval }) {
    //     browser.waitUntil(function () {
    //         try {
    //             // Some strange bug happens: ELEMENT of null
    //             // https://github.com/webdriverio/webdriverio/issues/1811
    //             let txtActual = browser.getText(selector)
    //             if (Array.isArray(txtActual)) {
    //                 // Many elements found
    //                 txtActual = txtActual[0]
    //             }
    //             return txtActual.includes(text)
    //         } catch (err) {
    //             return false
    //         }
    //     }, timeout, timeoutMsg, interval)
    // })
  });
});
