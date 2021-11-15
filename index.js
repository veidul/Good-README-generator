const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name if you would like to add it to your README.',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your application.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter instructions on how to install your application.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter an explanation the usage information for your application.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter your contribution guidelines for people who may want to contribute to your application.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter any test instructions you would like to give.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose the license you used for your application.',
            choices: ['Academic Free License v3.0', 'Apache license 2.0','Artistic license 2.0','Boost Software License 1.0','BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license','BSD 3-clause Clear license','Creative Commons license family','Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0','Creative Commons Attribution Share Alike 4.0','Do What The F*ck You Want To Public License',
            'Educational Community License v2.0','Eclipse Public License 1.0','Eclipse Public License 2.0','European Union Public License 1.1',
            'GNU Affero General Public License v3.0', 'GNU General Public License family','GNU General Public License v2.0',
            'GNU General Public License v3.0','GNU Lesser General Public License family','GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0','ISC','LaTeX Project Public License v1.3c','Microsoft Public License','MIT',
            'Mozilla Public License 2.0','Open Software License 3.0','PostgreSQL License', 'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License','The Unlicense','zLib License',]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username. (will be added to a link to your repository)'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address where users can contact you with anyone questions.'
        },
        
        
    ]);