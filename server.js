const express = require("express")
const app =express()
const PORT = process.env.PORT || 8080

app.get("/", (req,res) =>{
    res.json({result :"ok",data :[1,2,3,4,5]})
})
app.get("/test_1", (req,res) =>{
    res.json({result :"ok",data :[1000,3000],data2:"sever ok"})
})

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})