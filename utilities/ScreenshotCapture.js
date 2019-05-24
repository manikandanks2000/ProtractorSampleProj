var fs=require('fs');
var getSpecsFrom_Xlsx = require('./xlsx/getSpecsFromXlsx.js');
var array1 = getSpecsFrom_Xlsx.getFeatureFileName();  
var runRowId,currentRowid,Filename;
var ScreenshotCapture = function(){
    this.currentRowid = function currentRowid(Rowid){    
         var featureName = [];                  
         var lastRowId=array1.length;         
         for(var i=0;i<lastRowId;i++){            
         featureName.push(array1[i]);     
         }
        return featureName;
    } 
   this.runRowId = function runRowId(runRowId){
                                      
         Filename=runRowId;
         //console.log("featureFileName is" + Filename) ;
         return Filename;
   }

    this.attachScreenshot = function attachScreenshot(attach){   
       this.attach=attach;
   // cucumber's world object has attach function which should be used
    return browser.takeScreenshot().then(function(png) {
      const decodedImage = new Buffer(png, "base64");
      return attach(decodedImage, "image/png");
    });
    }
    

    this.takeScreenshot = function takeScreenshot(rowId){      			                                         
        
    dir='./reports/screenshots/';    
    function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();               
    
    } 
    console.log("waiting for page to load and capture screenshot...");       
    browser.takeScreenshot().then(function (png) {  
       
        var today = new Date();        
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' ';
        var time = today.getHours()+'HH'+today.getMinutes()+'MM'+today.getSeconds()+'SS'+today.getMilliseconds();                          
        newFileName = date+''+time;    
        writeScreenShot(png,dir+Filename+newFileName+'.png');                    
    });
}

}
module.exports = new ScreenshotCapture();