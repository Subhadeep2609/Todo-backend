import mongoose from "mongoose";


 const toSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    }
})

export default mongoose.model("todoDB",toSchema);