const mongoose=require("mongoose");
const bcrypt = require("bcrypt");
const userSchema=new mongoose.Schema({
  
        email:{type:String,required:true},
        password:{type:String,required:true},
        isDeleted:{type:Boolean,default:false},
        role:{type:String},
        verified:{type:Boolean,default:false},
},
{
 timestamps:true,
}
);

userSchema.pre("save", async function (next) {
        this.password = await bcrypt.hash(this.password, 8);
        next();
      });
module.exports=userSchema;