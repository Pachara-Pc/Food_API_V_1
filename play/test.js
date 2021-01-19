const request = require('request');
var fs = require('fs');

function listRate(x){
    
    process.stdout.write(x)
}



function setData (){

  request('https://arhanthai-4ab28-default-rtdb.firebaseio.com/user/.json', function (error, response, body) {
    
    let list = JSON.parse(body)
     
      Object.entries(list).forEach(([key,value])=>{
        let array
        Object.entries(value.histrory).forEach(([key,value]) =>{
          
            array+= JSON.stringify(value) +','
        })
        array+='\n'

        
            
      })

      
      listRate()
    
  }); 

  
}
 
setData ()

// function write (x){
//     fs.writeFileSync('mynewfile1.txt', x , function (err) {
//         if (err) throw err;
//         console.log('Updated!');
//       });
// }


// fs.writeFileSync('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

