import {mysql} from 'mysql2';
// console.log(mysql);

export const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'test_youn'
});
// console.log(connection);