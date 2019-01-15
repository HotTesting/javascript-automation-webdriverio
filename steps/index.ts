const { Given } = require("cucumber");

Given(/^I open website$/, function() {
    browser.url('')
});
