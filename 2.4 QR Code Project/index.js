/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// var qr = require('qr-image');
// var inq = require('inquirer');
// const { default: inquirer } = require('inquirer');

// const prompt = inquirer.createPromptModule();

// prompt(questions)

// import inquirer from "inquirer";
// var qr = require('qr-image');

// inquirer.prompt([
//     {
//         message : "Type in your URL: ",
//         name: "URL",
//     }
// ]).then((answers) => {
//     const url = answers.URL;
//     var qr_png = qr.image(url);
//     qr_png.pipe(require("fs").createWriteStream("qr_img.png"));
// }).catch((error) => {
//     if (error.isTtyError){

//     } else {

//     }
// });


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { error } from "console";

inquirer.prompt([
    {
        message : "Type in your URL: ",
        name: "URL",
    }
]).then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", url, (error)=>{
        if (error) throw error;
        console.log("The fle has been saved");
    });
}).catch((error) => {
    if (error.isTtyError){

    } else {

    }
});

