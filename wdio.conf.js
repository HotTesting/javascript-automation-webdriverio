process.env.TS_NODE_FILES = true;
require("ts-node").register();

exports.config = {
  specs: ["./tests/elementsExamples.ts"],
  port: "9515",
  path: "/",
  services: ["chromedriver"],
  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 1,
      "enableVNC": true
    }
  ],
  sync: true,
  logLevel: "silent",
  coloredLogs: true,
  deprecationWarnings: true,
  baseUrl: "http://ip-5236.sunline.net.ua:38015",
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 120000 // 2 mins
  },

  before: function () {
    // browser.timeouts("implicit", 1000);
  },

  beforeTest: function () {
      // console.log('GLOBAL BEFORE TEST')
  },

  afterTest: function () {
    // browser.timeouts("implicit", 1000);
  }
};
