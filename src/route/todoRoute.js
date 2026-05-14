import express from "express";
import { createTodo, getAllTodo } from "../controller/todoController.js";

const todoRoute = express.Router()

todoRoute.post("/create",createTodo);
todoRoute.get("/getTodo",getAllTodo);

export default todoRoute;