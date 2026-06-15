//require('dotenv').config()
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";



connectDB()

/*import express from "express"
const app = express();
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("errr", error);
            throw error
        })

        app.listen(env.process.PORT, ()=>{
            console.log(`app is lsitening on port ${process.env.PORT}`);
            
        })
    }
    catch(error){
        console.log(error);
        throw error
    }
} )()*/