const express=require('express')
const cors=require('cors')
require('dotenv').config()
const connectDB=require('./config/connectDB')
const router=require('./router/index')
const cookiesParser=require('cookie-parser')
const {app,server}=require('./socket/index')

// const app=express()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json())
app.use(cookiesParser())
const PORT=process.env.PORT || 8080
app.get('/',(req,res)=>{
    res.send("Server running at"+PORT)
})

//api end point
app.use('/api',router)

connectDB().then(()=>{
    server.listen(PORT,()=>{
        console .log(  `server running at ${PORT}`)
    })
})
