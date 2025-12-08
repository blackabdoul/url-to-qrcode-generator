import inquirer from "inquirer";
import { writeFile, createWriteStream } from "node:fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter your URL link:",
    },
  ])
  .then((answers) => {
    const url = answers.url;

    // Generate the QR code in SVG format
    const qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(createWriteStream("qr-code.png"));

    // Save the URL input into a text file
    writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("✅ The URL and QR code have been saved successfully!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something went wrong:", error);
    }
  });
