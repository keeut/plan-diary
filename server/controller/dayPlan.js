import * as repository from '../repository/dayPlan.js'

export const createDayPlan = async (req,res) => {
    const {date,userId} = req.body;
    const findSameDate = await repository.findByDate(date)
    const result = await repository.createPlan(date,userId)
    res.status(200).json({message:"well create the new plan"})
}

export const editPlan = async (req,res) =>{
    const {date,data} = req.body;
    const findSameDate = await repository.findByDate(date);
    if(!findSameDate){
        return await repository.createPlan(date)}
    const result = await repository.editPlan(date,data)
    res.status(200).json({message:"well edit the plan"})
}

export const editComplete = async (req,res) =>{
    const {date,data} = req.body;
    const findSameDate = await repository.findByDate(date);
    if(!findSameDate){
        return await repository.createPlan(date)}
    const result = await repository.editComplete(date,data)
    res.status(200).json({message:"well edit the plan"})
}

export const editTodo = async (req,res) =>{
    const {date,data} = req.body;
    const findSameDate = await repository.findByDate(date);
    if(!findSameDate){
        return await repository.createPlan(date)}
    const result = await repository.editTodo(date,data)
    res.status(200).json({message:"well edit the plan"})
}

export const findPlan = async (req,res) =>{
    const {date,userId} = req.query;
    let plan = []

    if (date) {
        plan = await repository.findByDate(date)}
    else { 
        plan = await repository.findByUserId(userId)};
    res.status(200).json(plan)
}
