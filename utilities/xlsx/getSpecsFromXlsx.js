'use strict';
var exceltojson =  require('./xlstojson.js');
var featureFile =[];
module.exports={
	
	getSpecsFromXlsx: function(){
	exceltojson.setdupata();
	var specs=[];
	var parse_XLSX = require('./parseXLSX.js');	
	var result=parse_XLSX.parseXLSX('./RunManager.xls');
	if(result.length>1){
		   //remove title row
		   result.splice(0, 1);
		   //loop remaining rows
		   result.forEach(function(item, index){
			   if(item[1] && "yes"==item[1].toLowerCase()){
				   specs.push(item[2]+"/"+item[0]+".feature");
				
			   }
		   });
	   }
	   //console.log(specs);	   
	   return specs;

	},
	getFeatureFileName: function(){
		
		var parse_XLSX = require('./parseXLSX.js');		
		var result=parse_XLSX.parseXLSX('./RunManager.xls');		
		if(result.length>1){
			   //remove title row
			   result.splice(0, 1);
			   //loop remaining rows			   
			   result.forEach(function(item, index){			  
			   if(item[1] && "yes"==item[1].toLowerCase()){					   
					   var featureName=item[0];	
						featureFile.push(featureName);
					   
				   }					   
							
				});				   
			}	
			console.log(featureFile)										 					 										  			  							
			return featureFile;			
		}
}	

