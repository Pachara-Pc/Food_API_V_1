const firebase = require("./firebase_connect");

module.exports = {
    getData: function(callback){
        firebase.database().ref("user/").once("value").then(function(snapshot){
            callback(snapshot.val());
        })
    }
}