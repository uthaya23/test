import express from 'express'
import dotenv from 'dotenv'
import'./db.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { AdminRouter } from './routes/auth.js'
import { StudentRouter } from './routes/student.js'

const app=express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
const corsOptions = {
    origin: 'https://marvelous-syrniki-cadeb8.netlify.app', // Your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(cors({
    origin: 'http://localhost:3000', // Update this to your frontend URL if needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

dotenv.config()
app.use('/auth',AdminRouter)
app.use('/student', StudentRouter)

app.listen(process.env.PORT,()=>{
    console.log("server is running")
})
