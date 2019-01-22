process.env.TS_NODE_FILES = true;
require("ts-node").register();

exports.config = {
  specs: ["./tests/test.1.ts"],
  port: "9515",
  path: "/",
  services: ["chromedriver"],
  capabilities: [
    {
      browserName: "chrome"
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

  beforeTest: function () {
      console.log('GLOBAL BEFORE TEST')
  }
};
