const request = require('request');
//var list = [];
var index  ;

var list = (x)=>{
    index = x

    
    console.log(index);
}

var x =  request('https://arhanthai-4ab28-default-rtdb.firebaseio.com/user/.json', (error,reponse)=>{

        const data = JSON.parse(reponse.body);
        
          
        list(index = Object.keys(data)) 
       //console.log( index);
    });


//console.log(x());


// request('https://arhanthai-4ab28-default-rtdb.firebaseio.com/user/'+'U002'+'.json', (error,reponse)=>{
//     const data = JSON.parse(reponse.body);
   
//   console.log(data.histrory);

//      let menu_firebase = JSON.stringify(data.histrory);
//    // console.log(menu_firebase[1]);

//     for(let i = 0 ;i<menu_firebase.length;i++){
//         if(menu_firebase[i] === ":"){
//             list.push(parseInt(menu_firebase[i+1]) )
//            // console.log(menu_firebase[i+1]);
//         }
//     }
    
// console.log(list);
//     //console.log(data);
    
// });


