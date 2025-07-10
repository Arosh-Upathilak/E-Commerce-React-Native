import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { connectDB } from './config/db.js'

dotenv.config();


//app config
const app = express();
const port = process.env.PORT

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

//db connection
connectDB();




app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`)
})
