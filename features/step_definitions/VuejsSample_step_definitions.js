var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require('cucumber');
var VuejsSamplePage = require('../../pages/VuejsSamplePage.js');
//var GlobalData = require('../../json/Centralized/GlobalData.json');
var ScreenShot = require('../../utilities/ScreenshotCapture.js');
var Db = require('../../utilities/DatabaseUtility.js');
var runRowId,n;
var currentRowid = [];

defineSupportCode(({Given, When, Then}) => {	
	Given(/^I Launch vuejs Application$/,{timeout:browser.params.globalTimeout}, function() {	
			VuejsSamplePage.navigateTovueURL();
			const attach = this.attach;
			ScreenShot.attachScreenshot(attach);						
			return browser.wait(function () {
			return expect(element(by.id('ctl00_PlaceHolderMain_signInControl_UserName')));
			});
			
		});
		When(/^I hover ui$/,{timeout: browser.params.globalTimeout}, function() {
			VuejsSamplePage.navigateTovueURL1();
			const attach = this.attach;
			ScreenShot.attachScreenshot(attach);
			return browser.wait(function () {	
				return expect(element(by.id('ctl00_PlaceHolderMain_signInControl_UserName')));						
			});
	});
	Then(/^I Should click on AdminTemplate$/,{timeout: browser.params.globalTimeout}, function() {
		VuejsSamplePage.navigateTovueURL2();	
		const attach = this.attach;
			ScreenShot.attachScreenshot(attach);
			return browser.wait(function () {	
				return expect(element(by.id('ctl00_PlaceHolderMain_signInControl_UserName')));						
			});
	});
		

});
