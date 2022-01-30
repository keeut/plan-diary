import { db } from "../db/database.js";

export async function createPlan(date,userId){
    await db.execute('INSERT INTO DAY_PLAN(date,userId) VALUE(?,?)',[date,userId])
    .then(result=>(result[0].affectedRows)).catch(error=>{console.log(error)})
}


export async function editPlan(date,data){
    return await db.execute('UPDATE day_plan SET plan = ? WHERE date = ?',[data,date])
    .then(result=>(result[0].affectedRows)).catch(error=>{console.log(error)})
}
export async function editComplete(date,data){
    return await db.execute('UPDATE day_plan SET complete = ? WHERE date = ?',[data,date])
    .then(result=>(result[0].affectedRows)).catch(error=>{console.log(error)})

}
export async function editTodo(date,data){
    return await db.execute('UPDATE day_plan SET todo = ? WHERE date = ?',[data,date])
    .then(result=>(result[0].affectedRows)).catch(error=>{console.log(error)})
}

export async function findByDate(date){
    return await db.execute('SELECT * FROM DAY_PLAN WHERE DATE = ?',[date])
    .then(result=>(result[0][0]))
}

export async function findByUserId(userId){
    return await db.execute('SELECT * FROM DAY_PLAN WHERE userId = ?',[userId])
    .then(result=>(result[0]))
}