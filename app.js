import express from 'express'
import employeeRouter from './routes/employeeRouter.js';
import dotenv from 'dotenv'
import { dbConnect } from './db/dbConnection.js';
const app= express()
dotenv.config()



const port=process.env.PORT;

app.use(express.json());
app.use("/employee",employeeRouter)

dbConnect();

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})

export default app;