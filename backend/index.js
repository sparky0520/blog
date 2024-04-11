import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import blogRoutes from './routes/blogRoutes.js'
import { PORT, mongoDBURL } from './config.js'

const app = express()

app.use(express.json()) // JSON parser middleware

// Allow users of all configs to access server
app.use(cors())

// Use /books route prefix
app.use('/blogs',blogRoutes)

app.get('/',(req,res) => {
    return res.status(200).send("Welcome to Blogs App !")
})

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Database Connected !")
        app.listen(PORT, ()=> {
            console.log(`http://localhost:${PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })