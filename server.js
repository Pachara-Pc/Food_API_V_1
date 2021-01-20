const express = require("express")
const bodyParser = require("body-parser")
const app =express()
const router = express.Router();
const PORT = process.env.PORT || 8080
const rec = require('./Reccomend/app')

const ofirebase = require("./firebase/setData")
const ogetData = require("./firebase/getData")

const request = require('request');
var dataSet = []

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req,res) =>{
    res.send('hello test ')
})

app.get('/test/:id',(req,res) =>{
    const index =  parseInt(req.params.id) ;
   
    res.json(rec.result(dataSet,index))

    //console.log(dataSet);
})

app.get("/userData/",function(req,res){
    ogetData.getData(function(data){
        res.send(data)
    })
})


app.post("/savedata/",function(req,res){
    ofirebase.saveData(req.body,function(err,data){
            res.json(data);
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})



function obj(x){
   
    Object.entries(x).forEach(([key,value])=>{
      let user = []
      Object.entries(value.histrory).forEach(([key,value])=>{
  
        user.push(value);
       
  
      })
     // console.log(user);
     dataSet.push(user)
     //console.log(dataSet);
    })
    
    
   // console.log(dataSet);
    
  }

  
  function setData (){
  
  
    request('https://arhanthai-4ab28-default-rtdb.firebaseio.com/user/.json', function (error, response, body) {

      let list = JSON.parse(body)
      //console.log(list);
        obj(list)
       
    }); 
  
    
  }
 

//setData()