process.env.TS_NODE_FILES = true;
require("ts-node").register();

exports.config = {
  specs: ["./features/**/*.feature"],
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

  framework: "cucumber",
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  reporters: ["spec"],
  //
  // If you are using Cucumber you need to specify the location of your step
  // definitions.
  cucumberOpts: {
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> filetype:compiler used for processing required features
    // <boolean< Treat ambiguous definitions as errors
    failAmbiguousDefinitions: true,
    // <boolean> invoke formatters without executing steps
    // dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> Enable this config to treat undefined definitions as
    // warnings
    ignoreUndefinedDefinitions: false,
    // <string[]> ("extension:module") require files with the given
    // EXTENSION after requiring MODULE (repeatable)
    name: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <string[]> (file/dir) require files before executing features
    require: [
      "./steps/index.ts"
      // Or search a (sub)folder for JS files with a wildcard
      // works since version 1.1 of the wdio-cucumber-framework
      //'./src/**/*.js',
    ],
    // <string> specify a custom snippet syntax
    snippetSyntax: undefined,
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string> (expression) only execute the features or scenarios with
    // tags matching the expression, see
    // https://docs.cucumber.io/tag-expressions/
    tagExpression: "not @Pending",
    // <boolean> add cucumber tags to feature or scenario name
    tagsInTitle: false,
    // <number> timeout for step definitions
    timeout: 20000
  }
};
