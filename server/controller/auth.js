import * as repository from '../repository/auth.js'
import bcrypt from 'bcrypt';
import jwt, { decode } from 'jsonwebtoken'

export async function signup(req,res) {
    const {userId,name,password,email} = req.body;
    const found = await repository.findById(userId);
    if (found) {
        return res.status(409).json({message:`${userId}이 존재 합니다`})
    }
    const hashed = await bcrypt.hash(password,10);
    const newUser = await repository.createUser({userId,name,password:hashed,email});
    const id = userId
    const token = jwt.sign({idnp},'abcd',{expiresIn:1000});
    res.status(201).json({token,id});
}

export async function login(req,res) {
    const {userId,password} = req.body;
    const found = await repository.findById(userId);
    if (!found) {
        return res.status(400).json({message:`${userId}가 존재하지 않습니다`})}
    
    const isValidPassword = await bcrypt.compare(password,found.password)
    if (!isValidPassword){
        return res.status(400).json({message:`${userId}의 비번이 틀림`})}
    
    const id = found.userId;
    const token = jwt.sign({id},'abcd',{expiresIn:1000});

    res.status(200).json({token,id})
}

export async function me(req,res) {
    const token = req.get('Authorization').split(' ')[1]
    jwt.verify(token,'abcd',async(error,decoded)=>{
        const userId = await repository.findById(decoded.id)
        res.status(200).json({token,userId:userId.userId})})}