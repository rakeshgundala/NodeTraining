Adding the capability to connect databases to Express apps is loading an appropriate Node.js driver for the database in your app. This document explains how to add and use some of the most popular Node.js modules for database systems

                 
1.MySQL                  Module: mysql

2.MongoDB                Module: mongodb

3.Oracle                 Module: oracledb

4.PostgreSQL             Module: pg-promise
         
 ------------- Example:---------------------------------------------
           
                         var pgp = require('pg-promise')(/*options*/)

                         var db = pgp('postgres://username:password@host:port/database')

                         db.one('SELECT $1 AS value', 123)
                         .then(function (data) {
                                  console.log('DATA:', data.value)
                            })
                          .catch(function (error) {
                          console.log('ERROR:', error)
                             })

-------------------------------------------------------------------------
 
 
5.SQL Server             Module: tedious

 ------------- Example:----------------------------------------------
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
  userName: 'your_username', // update me
  password: 'your_password', // update me
  server: 'localhost'
}

var connection = new Connection(config);

connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    executeStatement();
  }
});

function executeStatement() {
  request = new Request("select 123, 'hello world'", function(err, rowCount) {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + ' rows');
    }
    connection.close();
  });

  request.on('row', function(columns) {
    columns.forEach(function(column) {
      if (column.value === null) {
        console.log('NULL');
      } else {
        console.log(column.value);
      }
    });
  });

  connection.execSql(request);
}
                                    

-----------------------------------------------------------------------------------


6.SQLite                 Module: sqlite3                         etc......


some moduels are support more than one database connections 

 1.any-db module supports --------{postgres,mysql,sqlite3,mssql}
