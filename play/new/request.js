
const fetch = require('node-fetch');

const recommend = require('collaborative-filter')

const request = require('request');


function obj(x){
  let list = []
  Object.entries(x).forEach(([key,value])=>{
    let user = []
    Object.entries(value.histrory).forEach(([key,value])=>{

      user.push(value);
     

    })
   // console.log(user);
    list.push(user)
  })

  return list
  
}


function setData (x,callback){


  request('https://arhanthai-4ab28-default-rtdb.firebaseio.com/user/.json', function (error, response, body) {

    let list = JSON.parse(body)
      callback(obj(list),x)
     
  }); 

  
}

function recom(value,input){

 
  let rec = (x) => recommend.cFilter(value,x)
  
  //console.log(rec(input));
  listMenu(rec(input))
  //callback(rec);
 // console.log(rec(1));
  
  
 } 


function listMenu(recMenu,callback){

  
  let result = callback()
  

  return result
}


let result = (x) => setData(x,recom)
 
const Menu = (x) => result(x)



module.exports={
 Menu,listMenu
}
