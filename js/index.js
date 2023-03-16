import {connection} from './DB.js'
let checkTable;
// console.log(connection);
connection.connect();
connection.query(
  'select * from testtable3',
  (err,result,fields)=>{
    if (err) throw err;
    // console.log(result);
    checkTable = result;
    // console.log(typeof(checkTable));
    return checkTable;
  }
)
// const P = document.createElement('p');
// P.innerText = JSON.stringify(checkTable);
// document.body.appendChild(P);
console.log(checkTable);
connection.end();