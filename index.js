// Imports functions and node modules
const { writeFile } = require('./utils/generate-file.js');
const generateTxt = require('./src/template.js');
const inquirer = require('inquirer');

// Logic for initial inquirer prompts for basic info
const promptUser = () => {

    // Initial console.log
        console.log(`
        ==========
        Basic Info
        ==========
        `);

    // Array containing all of our prompts with validation
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a title!");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: gitUser => {
                if (gitUser) {
                    return true;
                } else {
                    console.log("Please enter a username!");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email!");
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for this project.',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log("Please enter a description!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.',
            validate: instInput => {
                if (instInput) {
                    return true;
                } else {
                    console.log("Please enter installation instructions!");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions for your project.',
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log("Please enter usage information!");
                    return false;
                }
            }

        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'Please select all languages / technologies used in this project.',
            choices:["HTML", "CSS", "JavaScript", "Node.JS", "Bootstrap", "Jquery"]

        },
        {
            type: 'confirm',
            name: 'contributionConfirm',
            message: 'Would you like to use contributor covenant contribution guidelines for your project?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please add contribution guidelines to your project.',
            when: ({contributionConfirm}) => {
                if (contributionConfirm) {
                    return false;
                } else {
                    return true;
                }
            },
            validate: contInput => {
                if (contInput) {
                    return true;
                } else {
                    console.log("Please enter contribution guidelines!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'testConfirm',
            message: 'Would you like to provide any test instructions for your project?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please add test instructions for your project.',
            when: ({testConfirm}) => {
                if (testConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log("Please enter test instructions!");
                    return false;
                }
            }
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Please select a license for your project.',
            // List type prompt displays our choices in this array, and when one is chosen it assigns our number as the value chosen to the promptData object
            choices: [
                {value: 0, name: "Apache License 2.0"},
                {value: 1, name: "GNU General Public License v3.0"},
                {value: 2, name: "MIT License"},
                {value: 3, name: 'BSD 2-Clause "Simplified" License'},
                {value: 4, name: 'BSD 3-Clause "New" or "Revised" License'},
                {value: 5, name: 'Boost Software License 1.0'},
                {value: 6, name: 'Creative Commons Zero v1.0 Universal'},
                {value: 7, name: 'Eclipse Public License 2.0'},
                {value: 8, name: 'GNU Affero General Public License v3.0'},
                {value: 9, name: 'GNU General Public License v2.0'},
                {value: 10, name: 'GNU Lesser General Public License v2.1'},
                {value: 11, name: 'Mozilla Public License 2.0'},
                {value: 12, name: 'The Unlicense'}
            ]
        }  
    ])
};

// Logic for prompting the user if they'd like to add images to the usage section.
const promptImg = promptData => {

    // If the data doesn't contain an images array, create one and set our i variable to 0
    if (!promptData.images) {
        promptData.images = [];
        var i = 0;
    }

    // If i is 0 (initial pass through), display these prompts
    if (i === 0) {

        console.log(`
        ===============
        Add some images
        ===============
        `);

        return inquirer.prompt([

            {
                type: 'confirm',
                name: 'imgConfirm',
                message: 'Would you like to add images to the usage section?',
                default: false,
            },

            { // Only displays this question when the user confirms they'd like to add an image
                type: 'input',
                name: 'imgInput',
                message: 'Please provide a path or link to your image.',
                when: ({ imgConfirm }) => {
                    if (imgConfirm) {
                        return true;
                    } else {
                        return false;
                    }
                } 
            },

            { // Only displays this question when the user confirms they'd like to add an image
                type: 'confirm',
                name: 'moreImg',
                message: 'Would you like to add another image?',
                default: false,
                when: ({ imgConfirm }) => {
                    if (imgConfirm) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }

        ]).then(imgData => {
            // If the user confirmed they'd like to add an initial image, push the image into the array and increment i by 1.
            if (imgData.imgConfirm) {
                promptData.images.push(imgData.imgInput);
                i++;
                // If the user confirms they'd like to add another image, then callback this function
                if (imgData.moreImg) {
                    return promptImg(promptData);
                // Otherwise return the data with the images array
                } else {
                    return promptData;
                }
            // Otherwise simply return the data with an empty array
            } else {
                return promptData
            }
        })
    
    // If i is greater than 0, then run these prompts
    } else {

        return inquirer.prompt([ 

            {
                type: 'input',
                name: 'imgInput',
                message: 'Please provide a path or link to your image.',
            
            },

            {
                type: 'confirm',
                name: 'moreImg',
                message: 'Would you like to add another image?',
                default: false
            }

        ]).then(imgData => {
            // Appends the image asked for to the images array
            promptData.images.push(imgData.imgInput);
            // If the user wants to add another image, then callback the function
            if (imgData.moreImg) {
                return promptImg(promptData);
            } else {
            // Otherwise, return the current promptData
                return promptData;
            }
        })
    }    
};

// Logic for prompting the user if they'd like to add videos to the usage section. Follows identical logic to
// the promptImg() function, so no comments will be added here.
const promptVid = promptData => {
    
    if (!promptData.videos) {
        promptData.videos = [];
        var i = 0;
    }

    if (i === 0) {

        console.log(`
        ===============
        Add some videos
        ===============
        `);

        return inquirer.prompt([

            {
                type: 'confirm',
                name: 'vidConfirm',
                message: 'Would you like to add videos to the usage section?',
                default: false,
            },

            {
                type: 'input',
                name: 'vidInput',
                message: 'Please provide a path or link to your video.',
                when: ({ vidConfirm }) => {
                    if (vidConfirm) {
                        return true;
                    } else {
                        return false;
                    }
                } 
            },

            {
                type: 'confirm',
                name: 'moreVid',
                message: 'Would you like to add another video?',
                default: false,
                when: ({ vidConfirm }) => {
                    if (vidConfirm) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }

        ]).then(vidData => {
            if (vidData.vidConfirm) {
                promptData.videos.push(vidData.vidInput);
                i++;
                if (vidData.moreVid) {
                    return promptVid(promptData);
                } else {
                    return promptData;
                }
            } else {
                return promptData;
            }
        })
    
    } else {

        return inquirer.prompt([ 

            {
                type: 'input',
                name: 'vidInput',
                message: 'Please provide a path or link to your video.',
            
            },

            {
                type: 'confirm',
                name: 'moreVid',
                message: 'Would you like to add another video?',
                default: false
            }

        ]).then(vidData => {
            promptData.videos.push(vidData.vidInput);
            if (vidData.moreVid) {
                return promptVid(promptData);
            } else {
                return promptData;
            }
        })
    }
};

// Logic for prompting the user for any contributors they'd like to add to the credits section
const promptAuthors = promptData => {

    // If data doesn't contain an authors key, generate an array on that key and create an i variable equal to 0
    if (!promptData.authors) {
        promptData.authors = [];
        var i = 0;
    }

    // Data to display on first call of function (when i is equal to 0)
    if (i === 0) {

        console.log(`
        ===========
        Add Credits
        ===========
        `);
    
    }

        // Prompts for a contributor and then asks if the user would like to add another
        return inquirer.prompt([

            {
                type: 'input',
                name: 'authInput',
                message: 'Please provide an author/contributor for your project',
            },

            {
                type: 'confirm',
                name: 'moreAuth',
                message: 'Would you like to add more credits?',
                default: false,
            }

        ]).then(authData => {
            // Pushes the contributor the user listed into the author array
            // Increments i by one
            promptData.authors.push(authData.authInput);
            i++;
            // If the user wants to add another contributor, callback this function with our current data
            if (authData.moreAuth) {
                return promptAuthors(promptData);
            // Otherwise, return the data
            } else {
                return promptData;
            }
        })

};

// Calls our prompt functions
// First prompts the user for basic info
// Then prompts the user for images..
// Then prompts the user for videos..
// Then prompts the user for authors..

// Once all data is gathered, we call our exported function from template.js to generate text formatted in markdown with all our answers subsituted into each proper section
// We return that text and then call a function from generate-file.js to generate the actual README.md using the text we recieved as data.
// Once that is complete, we console.log the response, and catch for any errors

promptUser()
    .then(promptImg)
    .then(promptVid)
    .then(promptAuthors)
    .then(promptData => {
        return generateTxt(promptData);
    })
    .then(txtData => {
        return writeFile(txtData);
    }).then(writeFileResponse => {
        console.log(writeFileResponse.message);
    }).catch(err => {
        console.log(err);
    });