import express from 'express';
import path from "path";
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';

const app = express();

const __dirname = path.resolve();
app.get("/book", (req,res) => {
    res.send.status(200).json({
        message : "book api is working"
    })
})

app.get("/health", (req, res) => {
    res.send("api of halth get ");
})

// maeke ready for deplyoment
if (ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/{*any}", (req, res) =>{
        res.sendFile(path.resolve(__dirname,"../frontend", "dist", "index.html"));
    })
}
const startServer = async () =>{
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
        console.log(`Server is running on port ${ENV.PORT}`);
        })
    } catch (error) {
        console.log("Error starting the server", error);
        process.exit(1);

    }
};
startServer();