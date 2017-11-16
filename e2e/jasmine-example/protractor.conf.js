
//protractor.conf.js
'use strict'

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
module.exports.config = {
directConnect: true,
 capabilities: {
 	'browserName': 'chrome',
 },
 specs: ['specs/*.spec.js'],
 baseUrl: 'https://pokedex-angular-example.herokuapp.com',
onPrepare() {
	jasmine.getEnv().addReporter(new SpecReporter({
   	displayFailuresSummary: true,
 		displayFailedSpec: true,
 		displaySuiteNumber: true,
 		displaySpecDuration: true
 	}));
 	jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
		fixedScreenShotName: true,	
		takeScreenshots: true,
		savePath: 'screenshots'
	 }));
	 
	 by.addLocator('dataTest',function(text) {
		 return document.querySelector(`[data-test="${text}"]`)
 	});

 }

 
};
