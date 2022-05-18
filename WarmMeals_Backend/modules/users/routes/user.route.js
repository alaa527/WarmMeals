
const validateRequest= require("../../../common/validateRequest")
const {addUserSchema,singInSchema}=require("../joi/userValidation");
const { getAllUsers,addNewUser ,Register,Login} = require('../controller/user.controller');

const router=require('express').Router();
router.get("/users",getAllUsers)

router.post("/register",validateRequest(addUserSchema),Register)
router.post("/login",validateRequest(singInSchema),Login)
router.post("/addUser",validateRequest(addUserSchema),addNewUser)


module.exports=router;