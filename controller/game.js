var Hocvien= require("../models/hocvien");

module.exports=function(app){
    
    app.get("/",function(req,res){
        res.render("layout") ;
    });
    
}