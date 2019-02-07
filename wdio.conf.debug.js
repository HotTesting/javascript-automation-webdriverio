process.env.TS_NODE_FILES = true;
require("ts-node").register();

if (!process.env.SUT_URL) {
  process.env.SUT_URL = "http://ip-5236.sunline.net.ua:38015";
}
console.log("Will be using SUT_URL:", process.env.SUT_URL);


let wdioConfig = {
  debug: true,
  execArgv: ["--inspect=127.0.0.1:5858"],
  specs: ["./tests/parallel/*.ts"],
  // --host 'ip-5236.sunline.net.ua' --port '4444' --path '/wd/hub' ./wdio.conf.js"
  host: 'ip-5236.sunline.net.ua',
  port: '4444',
  path: '/wd/hub',
  // port: "9515",
  // path: "/",
  // services: ["chromedriver"],
  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 5,
      enableVNC: true,
      name: 'StartIT automation',
      // Increasing session idle timeout
      sessionTimeout: "10m",
      // chromeOptions: {
      //   args: ["--headless", "--disable-gpu"]
      // }
    }
  ],
  sync: true,
  logLevel: "verbose",
  coloredLogs: true,
  deprecationWarnings: false,
  baseUrl: process.env.SUT_URL,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    // Increasing jasmine idle timeout
    timeout: 600000 // 600000ms == 10 mins
  },

  before: function(config, capabilities) {
    browser.windowHandleSize({ width: 1920, height: 1080 });
    // Giving debugger some time to connect...
    return new Promise(resolve => setTimeout(resolve, 20000));
  }
};

if (process.env.DEBUG == "1") {
  console.log("Running in debug mode!");
}

exports.config = wdioConfig;
