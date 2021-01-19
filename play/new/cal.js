const fetch = require('node-fetch');

fetch('https://arhanthai-4ab28-default-rtdb.firebaseio.com/user/.json')
    .then(res => res.json())
    .then(json => {

      let recList = []
  
      Object.entries(json).forEach(([key,value])=>{
        let array = []
        Object.entries(value.histrory).forEach(([key,value]) =>{
          
         array.push(value)
          

        })
          recList.push(array)
          
      })
      
      
    })