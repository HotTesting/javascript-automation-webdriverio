//process.env.TS_NODE_FILES = true;
//require("ts-node-dev").register();

let wdioConfig = {
  debug: true,
  execArgv: ["--inspect=127.0.0.1:5858"],
  specs: ["./tests/advanced/test.ts"],
  // --host 'ip-5236.sunline.net.ua' --port '4444' --path '/wd/hub' ./wdio.conf.js"
  // host: 'ip-5236.sunline.net.ua',
  // port: '4444',
  // path: '/wd/hub',
  port: "9515",
  path: "/",
  services: ["chromedriver"],
  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 1,
      enableVNC: true,
      // Increasing session idle timeout
      sessionTimeout: "10m"
    }
  ],
  sync: true,
  logLevel: "verbose",
  coloredLogs: true,
  deprecationWarnings: false,
  baseUrl: "http://ip-5236.sunline.net.ua:38015",
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    // Increasing jasmine idle timeout
    timeout: 600000 // 600000ms == 10 mins
  },

  before: function(config, capabilities) {
    // Giving debugger some time to connect...
    return new Promise(resolve => setTimeout(resolve, 20000));
  }
};

if (process.env.DEBUG == "1") {
  console.log("Running in debug mode!");
}

exports.config = wdioConfig;
