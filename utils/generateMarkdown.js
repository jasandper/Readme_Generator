// function to generate markdown for README
function generateMarkdown(data) {
  // let mit = "https://opensource.org/licenses/MIT"
  // let apache = "https://opensource.org/licenses/Apache-2.0"
  // let isc = "https://opensource.org/licenses/ISC"
  // let unlicence = "http://unlicense.org/"
  // let URL;

  // if (data.license === "MIT") {
  //   URL = mit 
  // } else if (data.license === "APACHE") {
  //   URL = apache
  // } else if (data.license === "ISC") {
  //   URL = isc
  // } else {
  //   URL = unlicence
  // }

let licenseURL = {
  MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  APACHE: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
  Unlicense: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
}

const URL = licenseURL[data.license]

  return `
  # Title: ${data.title} 

  ${URL}

  
  ## Description:
  ${data.description}

  ## Table of Contents
  * [Description](#description) 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation: 
  ${data.installation}

  ## Usage: 
  ${data.usage}

  ## License: 
  ${data.license}
  
  ## Contributing: 
  ${data.contributing}

  ## Tests: 
  ${data.tests}

  ## Questions: 
  [GitHub Profile](github.com/${data.username})

`;
}

module.exports = generateMarkdown;
