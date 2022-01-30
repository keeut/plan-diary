import mysql from 'mysql2'

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'plan-diary',
    password:'taesung9223',
    port : '3306',
});

export const db = pool.promise();