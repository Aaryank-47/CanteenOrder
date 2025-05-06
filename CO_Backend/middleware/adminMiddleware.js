import User from "../models/authModels.js";


export const adminMiddleware =async (req,res,next)=>{
    try {
        const user = await User.findById(req.user._id);
        if(user && user.usertype !== "admin"){
            return res.status(403).json({
                success: false,
                message: "You are not authorized to access this resource",
            })
            next();
        }
            
    } catch (error) {
        console.error("Error in adminMiddleware:", error);
        return res.status(500).json({ message: "Unauthorized access", error });
        
    }
}