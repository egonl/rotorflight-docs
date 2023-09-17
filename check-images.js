const fs = require('fs');
const path = require('path');

function getFileName(filePath) {
  const filenames = fs.readdirSync(path.dirname(filePath));
  //console.log('Filenames in the directory:', filenames);
  const foundElement = filenames.find((fileName) => fileName === path.basename(filePath));
  return foundElement;
}

function checkImages(directory) {
  //console.log("checking " + directory);
  fs.readdirSync(directory).forEach(file => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Recurse into subdirectories
      checkImages(filePath);
    } else if (path.extname(file).toLowerCase() === '.md') {
      // Read the Markdown file and check for image references
      const content = fs.readFileSync(filePath, 'utf8');
      const imageReferences = content.match(/!\[[^\]]*\]\((.*?)\)/g) || [];

      for (const reference of imageReferences) {
        const imagePath = reference.match(/\((.*?)\)/)[1];
        const absoluteImagePath = path.join(directory, imagePath);
        var filename = getFileName(absoluteImagePath);
        if (path.basename(absoluteImagePath) !== filename){
            console.log("Image '" + absoluteImagePath + "' not found in " + filePath);
        }

        if (!fs.existsSync(absoluteImagePath)) {
          console.error(`Image not found: ${absoluteImagePath}`);
        }
      }
    }
  });
}

// Call the function with your documentation directory
checkImages('docs');