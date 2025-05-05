import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const jwt_secret = process.env.JWT_SK

const generateToken = (user) => {
    try {
        return jwt.sign(
            { userId: user._id.toString(), email: user.email },
            jwt_secret,
            { expiresIn: '5d' }
        );
    } catch (error) {
        console.log(error);
    }
}

export default generateToken;
