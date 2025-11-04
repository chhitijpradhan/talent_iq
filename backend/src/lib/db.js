import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
    try {
        if (!ENV.DB_URL) {
            console.error("❌ DB_URL is not set in environment variables");
            throw new Error("DB_URL is not set")
        }
        
        // Debug: Log first 20 chars to see what we have (without exposing full connection string)
        const dbUrlPreview = ENV.DB_URL.length > 20 ? ENV.DB_URL.substring(0, 20) + '...' : ENV.DB_URL;
        console.log("🔍 DB_URL preview:", dbUrlPreview);
        
        // Trim whitespace in case there are spaces
        const dbUrl = ENV.DB_URL.trim();
        
        if (!dbUrl.startsWith('mongodb://') && !dbUrl.startsWith('mongodb+srv://')) {
            console.error("❌ DB_URL format is invalid. Must start with 'mongodb://' or 'mongodb+srv://'");
            console.error("   Current value starts with:", dbUrl.substring(0, 10) || '(empty)');
            throw new Error("Invalid MongoDB connection string format");
        }
        
        const conn = await mongoose.connect(dbUrl);
        console.log("✅ Connected to MongoDB:", conn.connection.host)
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1)  // 0 means success, 1 means failure
    }
}


