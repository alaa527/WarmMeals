const mongoose=require("mongoose");
const mealSchema=new mongoose.Schema({
        img:{type:String,required:true},
        name:{type:String,required:true},
        description:{type:String,required:true},
        price:{type:Number,required:true},
        category:{type:String,required:true},
        isDeleted:{type:Boolean,default:false},
},
{
 timestamps:true,
}
);
module.exports=mealSchema;

