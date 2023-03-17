// const mysql = require('mysql2');
import {connection} from './DB.js'
let checkTable;
// console.log(connection);
connection.connect();
// const why =
connection.query(
  'select * from testtable3',
  (err,result,fields)=>{
      if (err) throw err;
      checkTable = result;
      // console.log(result);
      console.log(checkTable);
      // console.log(typeof(checkTable));
      return checkTable;
    }
  )
  // const P = document.createElement('p');
  // P.innerText = JSON.stringify(checkTable);
  // document.body.appendChild(P);
  connection.end();
  // why();
  console.log(checkTable);