const mongoose=require("mongoose"),UserSchema=new mongoose.Schema({name:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0}},{timestamps:!0});module.exports=mongoose.model("User",UserSchema);