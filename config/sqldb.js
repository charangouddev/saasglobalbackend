// const mysql = require('mysql2');

// const connectSQL = () => {
//   const uri = process.env.SQL_URI;
//   const connection = mysql.createConnection(uri);

//   connection.connect((err) => {
//     if (err) {
//       console.error('SQL Connection Error:', err.stack);
//       process.exit(1);
//     } else {
//       console.log('SQL DB Connected as ID:', connection.threadId);
//     }
//   });

//   return connection;
// };

// module.exports = connectSQL;
