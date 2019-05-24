var rowCount = 0,getRow;
var CompareQuery =function CompareQuery(){       
             
      this.fetchOneRowFromRS =function fetchOneRowFromRS(connection, resultSet)
      {
         resultSet.getRow( // get one row
          function (err, row)
          {
            if (err) {
              console.error(err.message);
              doClose(connection, resultSet); // always close the ResultSet
            } else if (!row) {                // no rows, or no more rows
              doClose(connection, resultSet); // always close the ResultSet
            } else {
              rowCount++;
              console.log("The DB value is"+row);  
              browser.params.DBvalue= row;             
               fetchOneRowFromRS(connection, resultSet);   
            };                             
                  
      function doRelease(connection)
      {
        connection.close(
          function(err)
          {
            if (err) { console.error(err.message); }
          });
      }
      
      function doClose(connection, resultSet)
      {
        resultSet.close(
          function(err)
          {
            if (err) { console.error(err.message); }
            doRelease(connection);
          });
      }  
       
});                          
}  
   this.resultUI= function resultUI(result){    
      a=result.split("-");      
      msgSubject=a[0];    
      //msgBody=a[1];                                                     
      console.log("UI Result is"+msgSubject);
      console.log("The DB value is"+browser.params.DBvalue);  
      //console.log("UI Result is"+msgBody);  
      
      if(msgSubject==browser.params.DBvalue){
        console.log("DB validation Success");
      }
        
    }
}
module.exports = new CompareQuery();