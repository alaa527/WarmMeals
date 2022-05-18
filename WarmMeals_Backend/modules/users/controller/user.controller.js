const User=require("../model/user.model")
const  jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const getAllUsers=async (req,res) =>{
  try{  const users=await User.find({isDeleted: false})
  res.json({message:"All Users",data: users})}


      catch(error){
        res.json({message:"Error",error}); 
     }
  };


const addNewUser=async(req,res)=>{
let {email,password}=req.body;
try{
    await User.insertMany({email,password})
    res.json({message:"Added success"})
}
catch(error){
    res.json({message:"Error",error}) 
}
}
const Register=async(req,res)=>{
  let{email,password,role}=req.body;
  try{
     const user=await User.findOne({email:email})
     if(user){
        res.status(StatusCodes.BAD_REQUEST).json({message:"email is already exsists"});
     }
     else{
        let newUser=new User({email,password,role});
        await newUser.save();
        res.status(StatusCodes.CREATED).json({message:"registed success"});
     }
     }
     
     catch(error){
       res
       .status(StatusCodes.INTERNAL_SERVER_ERROR)
       .json({ message: "error", ...error});
     }
    
}



  const Login = async (req, res) => {
   const { email, password } = req.body;
   try {
     const user = await User.findOne({ email ,isDeleted:false});
     if (!user) {
       res
         .status(StatusCodes.BAD_REQUEST)
         .json({ message: "email is not found" });
     } else {
       const match = await bcrypt.compare(password, user.password);
       if (match) {
         const token = jwt.sign({id: user._id, role: user.role }, "shhhhh");
 
         res.status(StatusCodes.OK).json({
           message: "success",
           token,
           user: {
             id: user._id,
             email: user.email,
             role: user.role,
           },
         });
       } else {
         res
           .status(StatusCodes.BAD_REQUEST)
           .json({ message: "Authentication failed. Invalid user or password." });
       }
     }
   } catch (error) {
     res.json({ message: "error", error });
   }
 };
  module.exports={getAllUsers,Register,addNewUser,Login}