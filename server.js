const express = require("express")
const bodyParser = require("body-parser")
const app =express()
const router = express.Router();
const PORT = process.env.PORT || 8080
const rec = require('./Reccomend/app')

const ofirebase = require("./firebase/setData")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.get("/", (req,res) =>{
    res.send('hello test ')
})
app.get("/test_1", (req,res) =>{
    res.json({result :"ok",data :[1000,3000],data2:"sever ok"})
})

app.get('/test/:id',(req,res) =>{
    const index =  parseInt(req.params.id) ;
 
    res.json(rec.result(index))
})

app.post("/savedata/",function(req,res){
    ofirebase.saveData(req.body,function(err,data){
            res.send(data);
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})