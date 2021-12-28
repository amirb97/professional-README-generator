// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    for(let i=0; i<license.length; i++){
      if(license[i] === 'Apache')
      {
        return `![APACHE License](https://img.shields.io/aur/license/android-studio.svg?)`;
      } else if (license[i] === 'GNU GPLv3') {
        return `![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg?)`;
      } else {
        return `![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)`;
      };
    }
  } else {
    return '';
  }
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    for(let i=0; i<license.length; i++){
      if(license[i] === 'Apache')
      {
        return `Click here for information on the [APACHE License](https://www.apache.org/licenses/LICENSE-2.0)`;
      } else if (license[i] === 'GNU GPLv3') {
        return `Click here for information on the [GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)`;
      } else {
        return `Click here for information on the [MIT License](https://choosealicense.com/licenses/mit/)`;
      };
    }
  } else {
    return '';
  }
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `* [License](#license)
    
  ## License
    
  ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
