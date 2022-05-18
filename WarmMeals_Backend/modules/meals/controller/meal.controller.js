const Meal = require("../model/meal.model")

const getAllMeals=async (req,res) =>{
  const meals=  await Meal.find({});
    res.json({message:"All Meals" ,data: meals})
};
const addMeal=async (req,res)=>{
    let {img,name,description,price,category}=req.body;
    await Meal.insertMany({img,name,description,price,category})
    res.json({message:"Added Success"});
}

const MealById=async(req,res)=>{
    let {id}=req.params;
    try{
    const Mealdata= await Meal.findOne({_id:id})
    res.json({message:"getMealById Successfully",Mealdata});
    }
    catch(error){
        res.json({message:"Error",error}) 
    }
}
 const pagination = async (req, res) => {


    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 8;
    }
    let limit = parseInt(size);
    const skip = (page - 1) * size;
    const blogs = await Meal.find({})
      .limit(limit)
      .skip(skip);
    const all = await Meal.countDocuments();
    const totalPage = Math.ceil(all / limit);
    res.json({ message: "All blogs", page, totalPage, size, data: blogs });
  };

module.exports={
    getAllMeals,addMeal,MealById,pagination
};