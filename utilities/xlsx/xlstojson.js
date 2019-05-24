
//'use strict';
var Data = require('xls-to-json');


module.exports={
 setdupata : ()=>
{  
Data({
    input: ".//RunManager.xls",  // input xls 
    output: ".//json/Centralized/GlobalData.json", // output json 
    sheet: "GlobalData"  // specific sheetname 
  }, function(err, result) {
    if(err) {      
      console.error(err);
    } else {
      console.log(result);
    }
  });
  Data({
    input: ".//RunManager.xls",  // input xls 
    output: ".//json/PageLevel/Category.json", // output json 
    sheet: "Category"  // specific sheetname 
  }, function(err, result) {
    if(err) {      
      console.error(err);
    } else {
      console.log(result);
    }
  });
  Data({
    input: ".//RunManager.xls",  // input xls 
    output: ".//json/PageLevel/Welcome.json", // output json 
    sheet: "Welcome"  // specific sheetname 
  }, function(err, result) {
    if(err) {      
      console.error(err);
    } else {
      console.log(result);
    }
  });

}
} 

//setdupata();
  

