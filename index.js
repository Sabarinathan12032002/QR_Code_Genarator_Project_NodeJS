//Here you can create the QR code for any website that you want.
//First :In console change Directory to  path .
//Second :In console type node index.js.Enter 
//Third :Then give the website that you want to change the QR code.
//Fourth :Then give the name of file to stored as Image.
//Fifth :The final output will be stored as Image.

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs" ;

inquirer
  .prompt([{
    message: "Type the Url yo want: ",
    name: "URL",
  },
  {
    message: "Type the name for the PNG file: ",
    name: "fileName",
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    const fileName = answers.fileName;
    
    var qr_svg = qr.image(url);

    const Name = `${fileName}.png`;
    qr_svg.pipe(fs.createWriteStream(Name));

    fs.writeFile(fileName+".txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });

