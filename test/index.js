import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("Hello this is Chirag, This is the About page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});

