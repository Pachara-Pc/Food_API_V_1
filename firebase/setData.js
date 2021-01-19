const firebase =  require("./firebase_connect");

module.exports = {
    saveData : function(req, callback){

        let name = req.name;
      

       
        firebase.database().ref("menu/"+name).set({
            
            about : req.about,
            avg_calories : req.avg_calories,
            avg_rate : req.avg_rate,
            eng_name : req.eng_name,
            
            name : req.name,
            image : req.image,
            image_BG: req.image_BG,
            
            reading_name: req.reading_name,
            short_about : req.short_about

        });

        firebase.database().ref("menu/"+name+"/risky_ingredients").set({
            cows_milk : req.cows_milk,
            egg : req.egg,
            fish : req.fish,
            nuts : req.nuts,
            seafood : req.seafood

        });

        firebase.database().ref("menu/"+name+"/taste").set({
            spicy_lvl : req.spicy_lvl
          
        });
        
        firebase.database().ref("menu/"+name+"/main_ingredients/").set({
            rice : req.rice
          
        });

        firebase.database().ref("menu/"+name+"/main_ingredients/meat").set({
            type : req.type
            
          
        });

        
  


        callback(null,{"status code":200, "message:":"Inserted successfully "});
    }
}