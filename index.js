/* TO DO: 
- COMMENT CODE 
- Create Walkthrough video 
*/

const { writeFile } = require('./utils/generate-file.js');
const generateTxt = require('./src/template.js');
const inquirer = require('inquirer');

const promptUser = () => {

        console.log(`
        ==========
        Basic Info
        ==========
        `);

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
            choices: [
                {value: 0, name: "Apache License 2.0"},
                {value: 1, name: "GNU General Public License v3.0"},
                {value: 2, name: "MIT License"},
                {value: 3, name: 'BSD 2-Clause "Simplified" License'},
                {value: 4, name:  'BSD 3-Clause "New" or "Revised" License'},
                {value: 5, name: 'Boost Software License 1.0'},
                {value: 6, name: 'Creative Commons Zero v1.0 Universal'},
                {value: 7, name: 'Eclipse Public License 2.0'},
                {value: 8, name: 'GNU General Public License v2.0'},
                {value: 9, name: 'GNU Lesser General Public License v2.1'},
                {value: 10, name: 'Mozilla Public License 2.0'},
                {value: 11, name: 'The Unlicense'}
            ]
        }  
    ])
};

const promptImg = promptData => {

    if (!promptData.images) {
        promptData.images = [];
        var i = 0;
    }

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

            {
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

            {
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
            if (imgData.imgConfirm) {
                promptData.images.push(imgData.imgInput);
                i++;
                if (imgData.moreImg) {
                    return promptImg(promptData);
                } else {
                    return promptData;
                }
            } else {
                return promptData
            }
        })
    

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
            promptData.images.push(imgData.imgInput);
            if (imgData.moreImg) {
                return promptImg(promptData);
            } else {
                return promptData;
            }
        })
    }    
};

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

const promptAuthors = promptData => {

    if (!promptData.authors) {
        promptData.authors = [];
        var i = 0;
    }

    if (i === 0) {

        console.log(`
        ===========
        Add Credits
        ===========
        `);

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
            promptData.authors.push(authData.authInput);
            i++;
            if (authData.moreAuth) {
                return promptAuthors(promptData);
            } else {
                return promptData;
            }
        })
    
    } else {

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
            promptData.authors.push(authData.authInput);
            if (authData.moreAuth) {
                return promptAuthors(promptData);
            } else {
                return promptData;
            }
        })

    }
};

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