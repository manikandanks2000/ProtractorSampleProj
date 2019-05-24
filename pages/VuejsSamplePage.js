
var until = protractor.ExpectedConditions;
var categry=element(by.xpath('//*[@id="js-header"]/div/div[1]/a'));
var chart=element(by.xpath('//*[@id="app"]/div[3]/div[2]/div/ul/li[2]/a'));
var charthvr=element(by.xpath('//*[@id="js-image-67"]'));
//var closebtn=element(by.xpath('//*[@id="icon-close-madewithvuejs"]'));
var VuejsSamplePage = function(){
  
     this.navigateTovueURL = function()
      {  
       browser.driver.manage().deleteAllCookies();
       browser.driver.manage().window().maximize(); 
       browser.ignoreSynchronization = true;
       browser.get("https://madewithvuejs.com");  
       browser.driver.sleep(2000);
       } 
       this.navigateTovueURL1 = function()
        {
        browser.wait(until.presenceOf(categry),browser.params.globalTimeout,'Waiting for click').then(function()
        {
        var isClickable = until.elementToBeClickable(categry);    
        categry.click();     
        browser.driver.sleep(5000);  
         })
      }
      this.navigateTovueURL2 = function()
      {      
       browser.wait(until.presenceOf(chart),browser.params.globalTimeout,'Waiting for click').then(function()
        {
         var isClickable = until.elementToBeClickable(chart);    
         chart.click();
         browser.driver.sleep(2000); 
       })   
      browser.wait(until.presenceOf(charthvr),browser.params.globalTimeout,'Waiting for click').then(function()
      {
      var isClickable = until.elementToBeClickable(charthvr);    
      charthvr.click();
      browser.driver.sleep(2000);  
     })
}      
      
};
module.exports = new VuejsSamplePage();