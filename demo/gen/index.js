const fs = require('fs');
const path = require('path');

var output = '';

var elements = fs.readdirSync('../scss/elements');

for (var i = 0; i < elements.length; i++) {
    output += '@import \'../../scss/elements/' + elements[i] + '\';';
}

var commonFiles = fs.readdirSync('../scss/components');

for (var i = 0; i < commonFiles.length; i++) {
	output += '@import \'../../scss/components/' + commonFiles[i] + '\';';
}

fs.writeFileSync('scss/screen.scss', output);