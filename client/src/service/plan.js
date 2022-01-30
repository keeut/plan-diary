export default class PlanService{
    createDayPlan = async (date,userId) =>{
        return await customFetch('/',{
            method:'POST',
            body : JSON.stringify({date,userId}),
        })}

    findPlanByDate = async(date) =>{
        return await customFetch(`/?date=${date}`,{
            method:'GET',
        })}

    findPlanByUserId = async(userId) =>{
        return await customFetch(`/?userId=${userId}`,{
            method:'GET',
        })}

    editPlan = async (date,data) =>{
        return await customFetch('/plan',{
            method:'PUT',
            body : JSON.stringify({date,data}),
        })}
    editComplete = async (date,data) =>{
        return await customFetch('/complete',{
            method:'PUT',
            body : JSON.stringify({date,data}),
        })}
    editTodo = async (date,data) =>{
        return await customFetch('/todo',{
            method:'PUT',
            body : JSON.stringify({date,data}),
        })}

    
}

async function customFetch(url,options) {
    const res = await fetch(`http://localhost:8080/dayPlan${url}`,{
        ...options,
        headers:{...options.headers,"Content-Type":"application/json"},}
        )
    const data = await res.json()
    console.log(data)
    return data
}
