import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello World! This is Chirag</h1>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>This is The About Page of Light Industries</h1>");
});

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Page !</h1>")
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});

