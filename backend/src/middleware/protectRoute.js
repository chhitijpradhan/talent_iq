import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
requireAuth(),
async (req, res, next) => {
    try {
        const clerkId = res.auth().userId;

        if(!clerkId) return res.status(401).json({msg:"unauthorized - invalid token"});

        // find the user in db
        const user = await User.findOne(clerkId);

        if (!user) return res.status(401).json({msg : " User not found"})
        res.user = user
        next()
    }catch (error) {
        console.error("Error in clerk authMiddleware", error);
        res.status(500).json({msg: "Internal server error"})
    }
}
];