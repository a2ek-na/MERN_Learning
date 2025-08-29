const mongoDB = require('mongodb');

const MongoClient = mongoDB.MongoClient;

const url = "mongodb+srv://Manager1234:Manager1234@testdemo0.hzgob4s.mongodb.net/?retryWrites=true&w=majority&appName=testDemo0";

const connect = (hoGyaKya =>{
    MongoClient.connect(url)
    .then(hoGyaKya)
    .catch((error) =>{
        console.log("Sorry bhai Connect nhi hua");
        console.error(error); 
    });
});

module.exports = connect;