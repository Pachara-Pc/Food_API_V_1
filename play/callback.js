const request = require('request');

function getResult (){

    request('https://arhanthai-4ab28-default-rtdb.firebaseio.com/user/.json', function (error, response, body) {
    
    //console.log(JSON.parse(body));
    let list = JSON.parse(body)
      //console.log(list);
        let recList = []
  
      Object.entries(list).forEach(([key,value])=>{
        let array = []
        Object.entries(value.histrory).forEach(([key,value]) =>{
          
         array.push(value)
          

        })
          recList.push(array)
      })

      console.log(recList);
    //callback(recList)
    
  }); 

  }



let A = 0 

function plus(x){
    return x+1
}

function forLoop(x,callback){
    
    let num = x
    for (let index = 0; index < 10; index++) {
        num++
        
    }

    return callback(num)
}


let aPlus = plus(A);
let forL = forLoop(aPlus,(x)=>{
    

    return x+1
});

console.log(A);

console.log(plus(A));

console.log(aPlus);

console.log(forL);