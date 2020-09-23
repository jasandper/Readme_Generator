// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  
  ## ${data.description}

  ## Table of Contents
  * [Description](#description) 
  * [Installation](#installation)
  * [Usage](#License)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## ${data.installation}

  ## ${data.usage}

  ## ${data.license}

  ## ${data.contributing}

  ## ${data.tests}

  ## ${data.questions}

`;
}

module.exports = generateMarkdown;
