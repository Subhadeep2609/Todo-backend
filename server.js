import express from "express";
import { dbConnect } from "./src/config/dbConnect.js";
import todoRoute from "./src/route/todoRoute.js";
import dotenv from "dotenv"

dotenv.config();
const app = express();
const port = 8000;

app.use(express.json())
app.use("/",todoRoute)

dbConnect()

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})