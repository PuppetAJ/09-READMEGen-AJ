// info about application repository
// title, 
// description, 
// table of contents, 
// installation, 
// usage, 
// license, 
// contributing, 
// tests, 
// questions 
// sections
// title of project must be the same as the title of readme
// info is added to appropriate sections
// license must be chosen from a list of options and a badge must be applied to readme
// when entering github username a link to the github profile must be in questions
// same with email ^^
// table of contents must work


// ===
// prompts
// ===
// Installation instructions
// Usage information
// Contribution guidelines
// test instructions

// Index.js handles prompts

// write tests?

const inquirer = require('inquirer');

const promptUser = () => {

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
            message: 'Please provide usage instructions for your project',
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
            type: 'confirm',
            name: 'contributionConfirm',
            message: 'Would you like to use contributor covenant contribution guidelines?',
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
            promptData.images.push(imgData.imgInput);
            i++;
            console.log(i);
            if (imgData.moreImg) {
                return promptImg(promptData);
            } else {
                return promptData;
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
            promptData.videos.push(vidData.vidInput);
            i++;
            if (vidData.moreVid) {
                return promptVid(promptData);
            } else {
                return promptData;
            }
        })
    
    } else {

        return inquirer.prompt([ 

            {
                type: 'input',
                name: 'vidInput',
                message: 'Please provide a path or link to your image.',
            
            },

            {
                type: 'confirm',
                name: 'moreVid',
                message: 'Would you like to add another image?',
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

promptUser()
    .then(promptImg)
    .then(promptVid)
    .then(data => {
        console.log(data);
    });