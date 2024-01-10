import mongoose from "mongoose";

const connectDB = async (DATABASE_URL)=>{
    try{
        const DB_OPTIONS = {
            dbName: "geekshop",
            family: 4,
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("database connected succesfully !!")
    }
    catch(err){
        console.log("error occured while connecting database !!")
        console.log(err);
    }
}

export default connectDB;

