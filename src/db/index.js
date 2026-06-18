import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    console.log("INSIDE CONNECT DB");

    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log("MONGO CONNECTED");
        return connectionInstance;
    } catch (error) {
        console.log("MONGO ERROR", error);
        throw error;
    }
};

export default connectDB;