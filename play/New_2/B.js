const request = require('request');


 
 

 function load (callback){

    request('https://arhanthai-4ab28-default-rtdb.firebaseio.com/user/.json', (error,reponse)=>{

        const data = JSON.parse(reponse.body);
        
        let recList = []
  
      Object.entries(data).forEach(([key,value])=>{
        let array = []
        Object.entries(value.histrory).forEach(([key,value]) =>{
          
         array.push(value)
          

        })
          recList.push(array)
      })

          callback( recList )

        }
    )

    
 }

 let list = load(function(){return x} )



setTimeout( list  ,3000)