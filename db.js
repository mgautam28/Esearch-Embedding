const mysql = require('mysql');


const pool = mysql.createConnection({
    host: 'localhost',        
    user: 'root',             
    password: '',     
    database: 'esearch_db'   
});

pool.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the database.');
});



module.exports = pool;
