const mysql = require ("mysql2");
const dbConfig= require("../config/db.config.js");

// create a connection to database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MYSQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database");
});

module.exports = connection;