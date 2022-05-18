const { getAllMeals,addMeal,MealById,pagination} = require('../controller/meal.controller');

const router=require('express').Router();
router.get("/meals",getAllMeals)
router.post("/addMeal",addMeal)
router.get("/getMealById/:id",MealById)
router.get("/pagination", pagination);
module.exports=router;