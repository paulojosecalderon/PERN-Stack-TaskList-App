const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: 'localhost',
    database: 'tasklistdb',
    port: 5432,
    user: 'postgres',
    password: process.env.DB_PASSWORD
});

module.exports = pool;