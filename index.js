const inquirer = require('inquirer');
const fs = require('fs');
// ['MIT','GPLv2','Apache','Unlicense','BSD_3','BSD_4','unavailable']

const renderLicense = (license) => {
    switch (license) {
        case 'MIT':
            return `![License](https://img.shields.io/badge/License-MIT-orange.svg) <br> [MIT](https://opensource.org/licenses/MIT)`;
        case 'GPLv2':
            return `[License](https://img.shields.io/badge/License-GPLv2-orange.svg) <br> [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
            case 'Apache':
            return `[License](https://img.shields.io/badge/License-Apache-orange.svg) <br> [Apache](https://www.apache.org/licenses/LICENSE-2.0)]`;
            case 'Unlicense':
            return `[License](https://img.shields.io/badge/License-Unlicense-orange.svg) <br> [unlicense](https://unlicense.org/)`;
            case 'BSD_3':
            return `[License](https://img.shields.io/badge/License-BSD_3-orange.svg) <br> [BSD_3](https://opensource.org/licenses/BSD-3-Clause)`;
            case 'BSD_4':
            return `[License](https://img.shields.io/badge/License-BSD_4-orange.svg) <br> [BSD_4](https://spdx.org/licenses/BSD-4-Clause.html)`;
            case 'unavailable':
            return `No license available for this project.`;

    }
}

const generateReadme = ({ name, title, description, installation, usage, contribution, test, license, github, email }) =>
    `# ${title}

${renderLicense(license)}

1.[ Description. ](#desc)
<br>
2.[ Installation. ](#inst)
<br>
3.[ Usage. ](#use)
<br>
4.[ Contributing. ](#contr)
<br>
5.[ Testing. ](#test)
<br>
6.[ Github. ](#git)
<br>
7.[ Contact Me.](#conta)
<br>

<a id="desc"></a>
## 1.Description

${description}

<a id="inst"></a>
## 2.Installation

${installation}

<a id="use"></a>
## 3.Usage

${usage}

<a id="contr"></a>
## 4.Contributing

${contribution}

<a id="test"></a>
## 5.Testing
\`\`\`
${test}
\`\`\`
<a id="git"></a>
## 6.Github

[GitHub](https://github.com/${github})

<a id="conta"></a>
## 7.Contact Me
${name}
${email}

`
const promptUser = () => {
    return inquirer.prompt([
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
            choices: ['MIT', 'GPLv2', 'Apache', 'Unlicense', 'BSD_3', 'BSD_4', 'unavailable']
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
        


    ])
}

const init = () => {
    promptUser()

        .then((answers) => fs.writeFileSync('README.md', generateReadme(answers)))
        .then(() => console.log('Successfully created your README.md!'))
        .catch((err) => console.log(err));
}
init();