import foodModel from "../models/foodModel.js";

export const getFoodMenu = async (req, res) => {
    try {
        const foods = await foodModel.find();
        if(foods.length === 0 ){
            return res.status(404).json({message:"No food items found"});
        }
        const foodMenu = foods.map((food)=>{
            const {foodName, foodPrice, foodImage, foodCategory} = food;
            return {
                foodName,
                foodPrice,
                foodImage,
                foodCategory
            }.res.status(200).json({
                message: "Food menu fetched successfully",
                foodMenu})
        })
    } catch (error) {
        console.error("Error fetching food menu:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
