const express = require("express")
const app = express.Router()

const matematikaCtrl = require("./controller/matematika")
const cookieSessionCtrl = require('./controller/cookie-session')

const auth = require('../../middleware/auth')


app.use(auth)

app.get("/",function(req,res){
    res.send({
        message:"HELLO DARI ROUTE V1"
    })
})

app.get("/tambah",auth,matematikaCtrl.tambah)
app.get("/kurang",matematikaCtrl.kurang)
app.get("/kali",matematikaCtrl.kali)
app.get("/bagi",matematikaCtrl.bagi)
app.get('/set-cookie', cookieSessionCtrl.setCookie);
app.get('/get-cookie', cookieSessionCtrl.getCookie);
app.get('/set-session', cookieSessionCtrl.setSession);
app.get('/get-session', cookieSessionCtrl.getSession);

//REQ RES HEADER
app.get('/get-headers',function(req,res){
    const headers = req.headers;
    res.send({
        headers
    });
   
})
app.get('/set-headers',function(req,res){
    res.setHeader('x-be','pz-b5')
   // res.header('x-be','pz-b5') EXPRESS
    res.send({
        message:"header sent"
    });
})

module.exports = app