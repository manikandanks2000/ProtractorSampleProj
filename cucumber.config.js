"use strict";
var getSpecsFrom_Xlsx = require('./././utilities/xlsx/getSpecsFromXlsx.js');
//var exceltojson = require('./xlsx/xlstojson.js');
const path = require("path");
const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("././utilities/reporter.js");

var replace = require('replace-in-file');

exports.config = {
 //'autoStartStopServer':true,
  onPrepare: function() {
        const protractorImageComparison = require('protractor-image-comparison');
    browser. protractorImageComparison = new protractorImageComparison(
        {
          baselineFolder: './baseline/screenshots/',
          screenshotPath: './reports/screenshots/',
          autoSaveBaseline: true,
          
          disableCSSAnimation: true,
          nativeWebScreenshot: false,
          blockOutStatusBar: true,
          ignoreColors: true,
          ignoreAntialiasing: true
          
        }
    );
},
  
  params: {
    randomNumber: Math.floor(Math.random()*90000) + 10000, 
    rwId:'',version:'1.0.0.0', DBvalue:'',  
    globalTimeout:3000,        
},   

    ignoreUncaughtExceptions: true,
    pageTimeout: 2000,
    //allScriptsTimeout: 500000,    
    framework: 'custom',    
    specs:getSpecsFrom_Xlsx.getSpecsFromXlsx(),
          
    frameworkPath: './node_modules/protractor-cucumber-framework', 
    
    
capabilities: {
  
  'browserName': 'chrome',
        'platformName': 'windows',      
        
         shardTestFiles: false,
          maxInstances: 1,
         },
  /*
 multiCapabilities : [
    {
      'browserName' : 'internet explorer',
      shardTestFiles: true,
      maxInstances:2,
      maxSessions: 2,  
      'ignoreProtectedModeSettings': true  
    }, {
      'browserName' : 'chrome',
      shardTestFiles: true,
      maxInstances:2, //same version of browser
      maxSessions: 2,  //Any browser and any version
      'ignoreProtectedModeSettings': true 
    }
 ],*/
  directConnect:true,
  
    cucumberOpts: { 
          
      format: 'json:./reports/json/cucumber_report.json',
      require: [ 
          './features/step_definitions/*.js',       
          '../support/*.js'
       ],  
       tags: "(@AllureScenario or @CucumberScenario or @ProtractorScenario) and (not @DatabaseTest)",
        // @DatabaseTest scenario can be included when the username & password of DB have been configured in Support/database.js

       monochrome: true,
       strict: true,
       plugin: ["pretty"],       
      tags: true
      
  },

onComplete: function () {
  Reporter.createHTMLReport();

  replace.sync({  
    files: 'reports//html//cucumber_reporter.html',
    from: 'Cucumberjs Report',
    to: 'NAPA Connect Automation Report '+browser.params.version+'',
  });
  
}
};

function newFunction() {
  return 'chrome';
}

