import mongoose from "mongoose";

const DBconnection = async () => {
    
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("error while connecting with database", error.message); 
    }
}

export default DBconnection;