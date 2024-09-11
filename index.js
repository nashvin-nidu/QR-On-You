import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
      message: "Type Your URL",
      name: "URL"
    }
  ])
  .then((answers) => {
    const givenUrl = answers.URL;
    var qr_svg = qr.image(givenUrl);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", givenUrl, (err) => {
      if (err) throw err;
      // console.log(err);
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      console.log("Something else went wrong");
    }
  });
//   Create a txt file to save the user input using the native fs node module.


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
