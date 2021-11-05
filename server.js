var express = require("express");
var app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.use("/scrpits", express.static(__dirname+"/node_modules/web3.js-browser/build/"));//dung cho wed3 ket noi blockchain

var server =require("http").Server(app);
server.listen(process.env.PORT || 3000);

//mongoose db
const mongoose = require('mongoose');
//eXI6AngQgumySMud
//khunglong
mongoose.connect('mongodb+srv://khunglong:eXI6AngQgumySMud@cluster0.vvxvn.mongodb.net/khunglong?retryWrites=true&w=majority',(function(err){
    if(err){
        console.log("Mongoose concected error"+err);
    }
    else{
        console.log("mongo conected sucess");
    }
}));



require("./controller/game")(app);