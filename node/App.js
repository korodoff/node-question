const express = require('express');

const app = express()
const cors = require("cors")
const sum = require("./auth/user")
const {log} = require("./Middleware/middleware")
app.use(cors())

app.get("/sum",sum)

app.get("/",log, function(req,res){
    res.send("hello World")
})



app.listen(9090,(req,res)=>{
    console.log("server running")
})