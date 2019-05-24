'use strict';
module.exports = { 
	parseXLSX: function(xlsxPathAndFile){
		var XLSX = require('xlsx');		
		var workbook = XLSX.readFile(xlsxPathAndFile);
		var sheetName = workbook.SheetNames[0];
		var worksheet = workbook.Sheets[sheetName];
		/*var redValue = worksheet['A2'];
		console.log(redValue);*/ 
		var result = [];
		var row;
		var rowNum;
		var colNum;
		var range = XLSX.utils.decode_range(worksheet['!ref']);
		for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
			row = [];
			for(colNum=range.s.c; colNum<=range.e.c; colNum++){
				var nextCell = worksheet[
				                   XLSX.utils.encode_cell({r: rowNum, c: colNum})
				               ];
				if(typeof nextCell === 'undefined' ){
					row.push(void 0);
				} else row.push(nextCell.w);
		    }
		    result.push(row);
		}
		//console.log(result);
		return result;
	}

}

