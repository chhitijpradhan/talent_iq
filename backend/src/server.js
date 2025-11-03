import express from 'express';
const app = express();
app.get("/", (req, res) => {
    res.send("HELLO WORLD");
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});