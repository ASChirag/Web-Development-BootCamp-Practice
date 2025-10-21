//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { error } from "console";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

var userAuthorised = false;

function checkPassword(req, res, next){
    const password = req.body["password"];
    if (password === "ILoveProgramming"){
        userAuthorised = true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res)=>{
    if (userAuthorised === true){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, (error)=>{
    if (error) throw error;
    console.log(`Listening at port ${port}`);
});