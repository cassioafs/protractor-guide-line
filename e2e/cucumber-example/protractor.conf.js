'use strict'

exports.config = {

  directConnect: true,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'https://pokedex-angularjs.herokuapp.com',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: [
  'features/*.feature'

 ],
  cucumberOpts: {
    require: [
          'features/step_definitions/*.step.js',
          ],
    format: ['json:results.json', 'pretty'],
    profile: false,
    'no-source': true,
  },

  beforeLaunch: function() {
    setTimeout(function() {
        browser.driver.executeScript(function() {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight
            };
        }).then(function(result) {
            browser.driver.manage().window().setSize(result.width, result.height);
        });
    });

  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  afterLaunch: function() {
    var reporter = require('cucumber-html-reporter');

    var options = {
          theme: 'bootstrap',
          jsonFile: 'results.json',
          output: 'e2e/tests_result/cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true
      };

      reporter.generate(options);

  },
}