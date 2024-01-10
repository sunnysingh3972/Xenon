import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config({path:"./config/.env"});

const app = express();
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors({
    origin : process.env.FRONTEND,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

// connect database
connectDB(DATABASE_URL)

//JSON
app.use(express.json())

// Load Routes
app.use("/api/user", userRoutes);

app.listen(port, ()=>{
    console.log(`server listening at http://localhost: ${port}`)
})