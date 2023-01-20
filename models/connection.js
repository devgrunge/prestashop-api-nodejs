var mysql = require('mysql');

/* Database connection */
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'oha_db'
});


/* Check database variables */
if ((typeof connection.host === 'undefined') || (typeof connection.user === 'undefined') || (typeof connection.password === 'undefined') || (typeof connection.database === 'undefined')) {
    console.log("WARNING: Some database connection variables are not defined. File: models/connection.js.");
    console.log("===>" ,connection);
}

module.exports = connection;