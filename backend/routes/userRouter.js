import express from "express";
import { addUser } from "../controllers/addUser.js"
const userRouter = express.Router();

userRouter.post('/register',addUser)


export default userRouter;