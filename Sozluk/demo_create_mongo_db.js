/*var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/mydb";
//var url = "mongodb+srv://mehmet:mehmet123@cluster0-23kiu.gcp.mongodb.net/test";
var url = "mongodb+srv://mehmet:mehmet123@cluster0-23kiu.gcp.mongodb.net/test";
 const client = new MongoClient(url, {useUnifiedTopology: true});
 console.log("Database created!");
*/

const mongoose = require("mongoose");


 mongoose.connect("mongodb+srv://mehmet:mehmet123@cluster0-23kiu.gcp.mongodb.net/test")
    .then(() => console.log("Veritabanı bağlantısı başarıyla sağlanmıştır..."))
    .catch(error => console.log("Veritabanı bağlantısı sağlanırken beklenmeyen bir hatayla karşılaşıldı...", error.message));
  
module.exports = mongoose.model("Employees", new mongoose.Schema({
    _id: Number,
    userName: String,
    name: String,
    surName: String,
    age: Number
}));

//const model = require("../models/employee");

let employee = new model({
        _id: 3,
        userName: "abc",
        name: "X",
        surName: "Y",
        age: 35
    });
 
    employee.save((error, data) => {
        if (error) {
            response.send("Beklenmeyen bir hatayla karşılaşıldı...");
        } else {
            response.json(data);
        }
    });
