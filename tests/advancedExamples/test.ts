describe("WDIO", function() {
    it("low level actions", function() {
      browser.url("http://the-internet.herokuapp.com/hovers");
        
      let avatars = $$('[src="/img/avatar-blank.jpg"]')

      avatars.forEach(avatar=> {
          avatar.moveToObject()
          browser.pause(5000)
      })
      
    });
  });
  