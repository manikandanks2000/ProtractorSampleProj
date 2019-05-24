var DatabaseUtility =function DatabaseUtility(){
  var oracledb = require('oracledb');
  var Dbresult = require('./CompareQuery.js'); 
  
  this.executeQuery= function executeQuery(query){
  oracledb.getConnection(
    {
      user: "svc_pulseqa",  
      password: "Svcqa#17",
      connectString : "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=duapgqapulora02.genpt.net)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=plsqa02)(SCHEMA_NAME=PULSEUI)))"
    },
    function(err, connection)
    {
      if (err) { console.error(err.message); return; }
      connection.execute(
        query,
        [], // no bind variables
        { resultSet: true }, // return a ResultSet.  Default is false
        function(err, result)
        {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          }
          // console.log(result);
          Dbresult.fetchOneRowFromRS(connection, result.resultSet);
        });
    });
  }  
}
module.exports = new DatabaseUtility();
