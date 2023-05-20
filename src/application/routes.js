const express = require("express")

const app = express.Router()
app.get("/",function(req,res){
    res.send({
        message:"Hello World Get"
    })
})

app.post("/",function(req,res){
    res.send({
        message:"Hello World post"
    })
})
app.put("/",function(req,res){
    res.send({
        message:"Hello World put"
    })
})
app.patch("/",function(req,res){
    res.send({
        message:"Hello World patch"
    })
})

module.exports = app