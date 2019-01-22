console.log('OLOLO I AM IMPORTED!')

describe("Login", function() {
  if (true) {
    before(function() {
      console.log("BEFORE OUTER");
    });
  }

  beforeEach(function() {
    console.log("BEFOREEACH OUTER");
  });

  beforeEach(function() {
    console.log("BEFOREEACH OUTER 2");

    browser.url("/");
  });

  it("1", function() {
    this.timeout(3600000);
    console.log("1");
  });

  it("2", function() {
    console.log("2");
  });

  it("3", function() {
    console.log("3");
  });

  describe("should be succesful", function() {
    beforeEach(function() {
      console.log("BEFOREEACH INNER");
    });

    beforeEach(function() {
      console.log("BEFOREEACH INNER 2");
    });
    it("when correct email and pass", function() {
      console.log("NESTED 4");
    });
    it("5", function() {
      console.log("NESTED 5");
    });
  });

  describe("should be unsuccesful", function() {
    it("6", function() {
      console.log("NESTED2 6");
    });
  });
  
  [1, 2, 3, 4, 5].map((data, indx) => {
    it("DATA: " + data + "INDX" + indx, function() {
      console.log("GOT ", data, indx);
    });
  });

  it('run if windows', runIfWindows(function () {
    console.log('WINDOWS!!!')
  }))

});

function runIfWindows(fn) {
  if(false) {
    return fn
  }
  return undefined
}