const mongoose=require("mongoose");
const hocvienSchema=new mongoose.Schema({//them su lieu vao data tren cloud
    Email:String,
    HoTen:String,
    SoDT:String,
    ThanhToan:Boolean,
    Vi:String,
    Ngay:Date
});
module.exports=mongoose.model("HocVien",hocvienSchema);