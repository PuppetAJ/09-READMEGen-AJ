// Imports the file system module
const fs = require('fs');

// Writefile function logic
const writeFile = fileContent => {

// First we create a promise
// In the promise we use our fileContent paramater which contains the content for the file, to create the README.md
// If there is an error in generating the file, we reject the promise we created and forward the error, as well as returning.
// Otherwise, we resolve our promise and return and object containing a message to display, and a key of ok: set to true.

return new Promise((resolve, reject) => {
fs.writeFile('./dist/README.md', fileContent, err => {

    if (err) {
        reject (err);
        return;
    }

    resolve({
        ok: true,
        message: `
        ==================
        README.md Created!
        ==================
        `
    });
});
});
};

// Lastly we export our writeFile function for use in index.js
module.exports = { writeFile };