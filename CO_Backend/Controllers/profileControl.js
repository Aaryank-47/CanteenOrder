import profileModel from "../models/profileModel.js";

export const getProfile = async (req, res) => {

    try {
        const {userId} = req.params;
        const profile = await profileModel.findById(userId);
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        const {name,email,phoneNumber,address,profilePicture} = profile;
        const userProfile = {
            name,
            email,
            phoneNumber,
            address,
            profilePicture
        }
        res.status(200).json({
            message: "Profile fetched successfully",
            userProfile
        });

    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: "Internal server error" });

    }
}    