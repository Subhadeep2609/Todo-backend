
// import { todoSchema } from '../src/model/todoSchema.js';

import toSchema from "../model/toSchema.js";


export const createTodo = async (req,res)=>{
    try{
        const {title} = req.body;
        const newTodo = await toSchema.create({title})
        return  res.status(201).json({
            success:true,
            message:"Todo created successfully",
            data:newTodo
        })
    }catch(error){
       return res.status(500).json({
            success:false,
            message:"Todo not created",
        })
    }
}
export const getAllTodo = async (req,res)=>{
    try{
        const getTodo = await toSchema.find({})
        return  res.status(200).json({
            success:true,
            message:"Todo fetched successfully",
            data:getTodo
        })
    }catch(error){
       return res.status(500).json({
            success:false,
            message:"Todo not fetched",
        })
    }
}
