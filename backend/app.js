import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import {v2 as cloudinary} from 'cloudinary';
import cors from "cors";

const app=express();

cloudinary.config({ 
  cloud_name: `${process.env.CLOUD_NAME}`, 
  api_key: `${process.env.API_KEY}`, 
  api_secret: `${process.env.API_SECRET}` 
});

//cors 
app.use(cors({
    credentials:true,
    origin:"https://aeonaxydribbble.netlify.app"
}))

//This converts request body to json 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//cookie parser(if not used,cookies will be undefined)
app.use(cookieParser())

//body parser(To view in postman)
app.use(bodyParser.json())

//User
app.use("/",userRoutes)

export {app,cloudinary}