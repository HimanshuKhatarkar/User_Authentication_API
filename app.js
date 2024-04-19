import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import connectDb from './config/connectdb.js'


const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// CORS policy error rectifies 
app.use(cors())

// Database Connections
connectDb(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api/user", userRoutes)


app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`)
})
