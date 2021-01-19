const e = require('express')
const recommend = require('../../node_modules/collaborative-filter/lib/cf_api.js')

const request = require('request');

function Data(x){
    list = x
    //console.log(list);
    return list
}

function set(x,y){
    
    let list = [[1,0,1],[1,1,0],[0,1,1]]
    
    let e =request('https://arhanthai-4ab28-default-rtdb.firebaseio.com/user/.json', (error,reponse,callback)=>{

        const data = JSON.parse(reponse.body);
        
          
        index = Object.keys(data)

        return (Data(index))

      
    });

    


    return edit(Data(e),y)
}

function edit(x,y){
    let Array = x

    return  Array[y]
}


 
const result = set

module.exports ={
    result
}