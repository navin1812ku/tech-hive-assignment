const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/techHive')
const ItemModel=mongoose.model("items",new mongoose.Schema({
     id:{type:Number,required:true,unique:true},
     model:{type:String,required:true},
     brand:{type:String,required:true},
     category:{type:String,required:true},
     cost:{type:String,require:true}
}));
module.exports=ItemModel;
