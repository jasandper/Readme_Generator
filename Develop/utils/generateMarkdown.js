// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n# ${data.description} \n# ${data.table}

`;
}

module.exports = generateMarkdown;
