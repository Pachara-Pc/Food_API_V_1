const express = require("express")
const app =express()
const PORT = process.env.PORT || 8080
const rec = require('./Reccomend/app')

app.get("/", (req,res) =>{
    res.json({result :"ok",data :[1,2,3,4,5]})
})
app.get("/test_1", (req,res) =>{
    res.json({result :"ok",data :[1000,3000],data2:"sever ok"})
})

app.get("/rec_0",(req,res)=>{
    res.json(rec.result(0));
})

app.get("/rec_1",(req,res)=>{
    res.json(rec.result(1));
})

app.get("/rec_2",(req,res)=>{
    res.json(rec.result(2));
})

app.get("/rec_3",(req,res)=>{
    res.json(rec.result(3));
})

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})