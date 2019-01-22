import { Given } from "cucumber";

Given('I open website', function() {
  browser.url("");
});

Given('I log {string}', function(toLog) {
  console.log('Logging ', toLog)
});
