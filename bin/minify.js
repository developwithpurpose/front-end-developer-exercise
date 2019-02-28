const minify = require('minify');
const path = require('path');
const fs = require('fs');

const jsDir = path.join(`${__dirname}/../app/assets/scripts/`);
const jsPath = `${jsDir}/baby-step-content.module.js`;
const outputFile = `${jsDir}/baby-step-content.module.min.js`;


    function minifyJS(jsPath, outputFile) {
        return minify(jsPath)
            .then((minified) => {
                fs.writeFileSync(outputFile, minified);
            })
            .catch(console.error);
    }

minifyJS(jsPath, outputFile)