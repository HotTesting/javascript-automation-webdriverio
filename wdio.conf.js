process.env.TS_NODE_FILES = true;
require("ts-node").register();

exports.config = {
  specs: ["./tests/parallel/*.ts"],
  port: "9515",
  path: "/",
  services: ["chromedriver"],
  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 5,
      "enableVNC": true
    }
  ],
  // reporters: ['spec'],
  // http://v4.webdriver.io/guide/reporters/allure.html
  // allure generate ./allure-results && allure open
  // Dont forget to install allure commandline tools and JAVA !
  reporters: ['dot', 'allure'],
  reporterOptions: {
      allure: {
          outputDir: 'allure-results'
      }
  },
  
  // multiremote
  // capabilities: {
  //   user1: {
  //     browserName: "chrome",
  //     maxInstances: 1,
  //     enableVNC: true
  //   },
  //   user2: {
  //     browserName: "chrome",
  //     maxInstances: 1,
  //     enableVNC: true
  //   }
  // },
  sync: true,
  logLevel: "silent",
  coloredLogs: true,
  deprecationWarnings: false,
  baseUrl: "http://ip-5236.sunline.net.ua:38015",
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 120000 // 2 mins
  },

  before: function() {
    // browser.timeouts("implicit", 1000);
  },

  beforeTest: function() {
    // console.log('GLOBAL BEFORE TEST')
  },

  afterTest: function() {
    // browser.timeouts("implicit", 1000);
  }
};
