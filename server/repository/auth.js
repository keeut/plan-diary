import { db } from "../db/database.js";

export async function findByName(name) {
    return await db.execute('SELECT * FROM users WHERE name = ?',[name])
    .then((result)=>(result[0][0]));
  }
  
export async function findById(userId) {
    return await db.execute('SELECT * FROM users WHERE userId =?',[userId])
    .then((result)=>(result[0][0]));
}

export async function createUser(user) {
    return await db.execute('INSERT INTO users(userId,password,email,name) VALUES(?,?,?,?)',[user.userId,user.password,user.email,user.name])
    .then((result)=> (result[0].insertId));
}