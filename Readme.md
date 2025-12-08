# 📌 QR Code Generator (Node.js CLI Project)

This project is a simple but practical Node.js command-line application that generates a QR Code image from any URL entered by the user.
It also stores the URL input inside a .txt file, helping keep a log or reference for later use.

## 📂 Project Structure

Full-Stack/
└── backend/
└── 2.4 QR Code Project/
├── index.js # Main executable file
├── qr-code.png # Generated QR Code (auto-created)
├── URL.txt # Stores the provided URL (auto-created)
├── package.json # Project dependencies & metadata
├── package-lock.json
└── node_modules/ # Installed packages

## 🛠 Technologies Used

Tool - Purpose
Node.js - Server-side runtime for executing JavaScript
Inquirer.js - CLI package used to prompt the user for input
qr-image - Generates QR code images from URLs
fs (File System) - Saves the input URL into .txt file

## 🚀 Features

✔ Accepts user input via terminal
✔ Converts URL into a QR code image (qr-code.png)
✔ Saves the URL in URL.txt for reference
✔ Lightweight & runs directly in terminal
✔ Portable — no external API required

## 📦 Installation & Setup

1️⃣ Clone the project (optional)
git clone <repo-url>
cd <repo-name>

2️⃣ Install Dependencies
npm install

(If modules are missing, you may manually add them)
npm install inquirer qr-image

## ▶ Usage

✅Run the application with:
node index.js
✅You will see a prompt:
Enter your URL link:
✅After entering your link, two files are created automatically:

✅Output File - Description
qr-code.png - Image of generated QR Code
URL.txt - Stores your URL input

## 📸 Screenshots

### Development Environment

![Codespace Screenshot](./screenshots/Screenshot%202025-12-08%20221708.png)

### QR-code (Results)

![qr-code Results](./screenshots/qr-code.png)

## 🔧 Project Logic Overview (index.js)

Step - Process
1 Prompt user for URL using Inquirer
2 Convert input into QR Code using qr-image
3 Save QR to qr-code.png using stream
4 Store URL to URL.txt using fs.writeFile

## 📌 Future Improvements (optional)

Improvement - Description
Add support for SVG & PDF output - Allow format options
Generate multiple QR files - Automatic naming timestamps
GUI interface using Electron/React - Replace CLI prompts with UI
Host as small web service - QR generator website

## 🏁 Conclusion

This project is a clean beginner-friendly implementation of Node.js-based QR Code generation, perfect for learning:

🔹 CLI input handling
🔹 Working with external packages
🔹 File streaming & writing output
