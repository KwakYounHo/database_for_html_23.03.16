import {mysql,connection} from './DB.js'
console.log(mysql);
console.log(connection);
// connection.connect();
// connection.query(
//   'select * from testtable3',
//   (err,result,fields)=>{
//     if (err) throw err;
//     console.log(result);
//   }
// )
// connection.end();