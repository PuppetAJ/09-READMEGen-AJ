// Imports functions from license.md.
const {
    generateLicense1, 
    generateLicense2, 
    generateLicense3,
    generateLicense4,
    generateLicense5,
    generateLicense6,
    generateLicense7,
    generateLicense8,
    generateLicense9,
    generateLicense10,
    generateLicense11,
    generateLicense12,
    generateLicense13
} = require ('./licenses.js');
// Imports file system functionality.
const fs = require('fs');

// ***NOTE: THERE IS A GENERAL LACK OF INDENTATION IN THIS DOCUMENT DUE TO HOW POORLY TEMPLATE LITERALS GENERATE WHEN INDENTED.

// Logic for generating the tests section
const generateTests = (testConfirm, testTxt) => {

// If the user confirms the need for a test section, then return it with the text in place.
if (testConfirm) {
return `
## Tests
${testTxt}
`
// Otherwise, return an empty string.
} else {
    return '';
}

};

// Logic for generating the images section
const generateImages = imgArr => {

    // If the image array is empty, return
    if (imgArr === []) {

        return;

    // Otherwise, 
    } else {

        // Create a new array consisting of each element formatted how we want it to be displayed in the readme
        // Then join those elements into a string we can use, complete with line breaks.
        return imgArr.map(img => {
            return (`![](${img})\n`);
        }).join('');

    }

};

// Logic for generating the videos section
const generateVideos = vidArr => {

    // If the videos array is empty, return
    if (vidArr === []) {
        return;
    // Otherwise, 
    } else {
        // Create a new array consisting of each element formatted how we want it to be displayed in the readme
        // Then join those elements into a string we can use, complete with line breaks.

        // We use the i variable to denote which video in the list we're on in the text.
        let i = 0;
        return vidArr.map(vid => {
            i++;
            return (`* [See Video ${i}:](${vid})\n`);
        }).join('');
    }
};

// Logic for generating the contribution section
const generateContribution = (confirm, data) => {

// If the user confirms they want to use contributor covenant guidelines, we return that as text.
if (confirm) {
return `
![](https://img.shields.io/badge/Contribution-CC%20v2.1-blueviolet)\n

This project follows the contributor covenant contribution guidelines. See [here](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) 
`
// Otherwise, we take the user's inputted text and format it, then return it.
} else {
    return `${data}`
}

};

// Logic for generating the authors section
const generateAuthors = authors => {

    // Creates a new array with each element formatted into a string. 
    // Then we join the array into one string and return it.
    return authors.map(author => {
        return (`* ${author}\n`);
    }).join('');

};

// Logic for generating LICENSE.md
const generateLicense = (licenseID, name) => {

// Switch statement which checks for the ID of the license (0-12)

// For each case, we use our generateLicense#() functions from licenses.js to generate the appropriate into our file.
// Then we write the file using fs.writeFile, and add an arrow function to handle errors.

switch(licenseID) {
case 0:
fs.writeFile("./dist/LICENSE.md", generateLicense1(), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})

return `
This project is licensed under the Apache License 2.0. See [LICENSE.md](./LICENSE.md) for more details.
`

case 1:
fs.writeFile("./dist/LICENSE.md", generateLicense2(), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed under the GNU General Public License v3.0. See [LICENSE.md](./LICENSE.md) for more details.
`

case 2:
fs.writeFile("./dist/LICENSE.md", generateLicense3(name), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
    
})
return `
This project is licensed under the MIT License. See [LICENSE.md](./LICENSE.md) for more details.
`

case 3:
fs.writeFile("./dist/LICENSE.md", generateLicense4(name), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed BSD 2-Clause "Simplified" License. See [LICENSE.md](./LICENSE.md) for more details.
`

case 4:
fs.writeFile("./dist/LICENSE.md", generateLicense5(name), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed BSD 3-Clause "New" or "Revised" License. See [LICENSE.md](./LICENSE.md) for more details.
`

case 5:
fs.writeFile("./dist/LICENSE.md", generateLicense6(), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed under the Boost Software License 1.0. See [LICENSE.md](./LICENSE.md) for more details.
`

case 6:
fs.writeFile("./dist/LICENSE.md", generateLicense7(), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed under the Creative Commons Zero v1.0 Universal License. See [LICENSE.md](./LICENSE.md) for more details.
`

case 7:
fs.writeFile("./dist/LICENSE.md", generateLicense8(), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed under the Eclipse Public License 2.0. See [LICENSE.md](./LICENSE.md) for more details.
`

case 8:
fs.writeFile("./dist/LICENSE.md", generateLicense9(), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed under the GNU Affero General Public License v3.0. See [LICENSE.md](./LICENSE.md) for more details.
`

case 9:
fs.writeFile("./dist/LICENSE.md", generateLicense10(), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed under the GNU General Public License v2.0. See [LICENSE.md](./LICENSE.md) for more details.
`

case 10:
fs.writeFile("./dist/LICENSE.md", generateLicense11(), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed under the GNU Lesser General Public License v2.1. See [LICENSE.md](./LICENSE.md) for more details.
`

case 11:
fs.writeFile("./dist/LICENSE.md", generateLicense12(), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed under the Mozilla Public License 2.0. See [LICENSE.md](./LICENSE.md) for more details.
`

case 12:
fs.writeFile("./dist/LICENSE.md", generateLicense13(), err => {
    if (err) {
        console.log(err)
    } else {
        console.log(`
        ===================
        LICENSE.md Created!
        ===================
        `);
    }
})
return `
This project is licensed under The Unlicense. See [LICENSE.md](./LICENSE.md) for more details.
`
};

};

// Logic for generating license badges.
const licenseBadge = (licenseID) => {

// Switch statement which accepts the ID of the license (0-12)

// In each case, we return a link to a badge of the appropriate license.
switch(licenseID) {

case 0:
return `
![](https://img.shields.io/badge/License-Apache%202.0-yellow)
`

case 1:
return `
![](https://img.shields.io/badge/License-GPL%20v3-blue)
`

case 2:
return `
![](https://img.shields.io/badge/License-MIT-green)
`

case 3:
return `
![](https://img.shields.io/badge/License-BSD%202--Clause-orange)
`

case 4:
return `
![](https://img.shields.io/badge/License-BSD%203--Clause-orange)
`

case 5:
return `
![](https://img.shields.io/badge/License-Boost%201.0-9cf)
`

case 6:
return `
![](https://img.shields.io/badge/License-CC0%201.0-lightgrey)
`

case 7:
return `
![](https://img.shields.io/badge/License-EPL%202.0-red)
`

case 8:
return `
![](https://img.shields.io/badge/License-AGPL%20v3-blue)
`

case 9:
return `
![](https://img.shields.io/badge/License-GPL%20v2-blue)
`

case 10:
return `
![](https://img.shields.io/badge/License-LGPL%20v2.1-blue)
`

case 11:
return `
![](https://img.shields.io/badge/License-MPL%202.0-brightgreen)
`

case 12:
return `
![](https://img.shields.io/badge/License-Unlicense-blue)
`

}
};

// Logic for generating the languages section.
const generateLanguages = langArr => {

    // Creates a new array each element formatted as a template literal.
    // Joins all elements into one string and then returns it.
    return langArr.map(lang => {
        return (`* ${lang}\n`);
    }).join('');

};

// Exports the markdown for readme, filling in sections using our previous functions.
// Exported function uses userData as an argument, which we deconstruct to pass through our functions in this document.
module.exports = userData => {

const { title, github, description, installation, usage, contribution, contributionConfirm, images, videos, tests, authors, license, testConfirm, email, languages } = userData;

return `
# ${title}

${licenseBadge(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Languages](#languages)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

${installation}

## Languages

${generateLanguages(languages)}

## Usage

${generateImages(images)}
${generateVideos(videos)}
${usage}

${generateTests(testConfirm, tests)}
## Credits

${generateAuthors(authors)}

## License

${generateLicense(license, github)}
---

## Contributing

${generateContribution(contributionConfirm, contribution)}

## Questions

If you have any questions or concerns visit my [github](https://github.com/${github}) or send me an email at <${email}>. 

`
};