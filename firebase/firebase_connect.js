    const firebase = require("firebase");

    const app =firebase.initializeApp( {
      
      apiKey: "AIzaSyC6NHUHlHm1YDCQqhvzjxHdqLxnXK5suwA",
      authDomain: "food-69e43.firebaseapp.com",
      databaseURL: "https://food-69e43-default-rtdb.firebaseio.com",
      projectId: "food-69e43",
      storageBucket: "food-69e43.appspot.com",
      messagingSenderId: "312563104598",
      appId: "1:312563104598:web:b2b564a915e0ac88bf74f7"
    
    /*

    projectId: "food-69e43",
    storageBucket: "food-69e43.appspot.com",
    messagingSenderId: "312563104598",
    appId: "1:312563104598:web:5c60b66de2322297bf74f7"
    
    */
  });

module.exports = app;