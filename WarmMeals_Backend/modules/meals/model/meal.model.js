const mongoose=require("mongoose");
const mealSchema=require("../Schema/meal.schema");
const Meal=mongoose.model("meal", mealSchema);
module.exports=Meal;
