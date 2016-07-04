var fs = require('fs');
// given a file, starts on 2
var filePath = process.argv[2];
// filesystem reads the file in sync, changes to string and splits on a new line
var lines = fs.readFileSync(filePath).toString().split('\n').length - 1;
console.log(lines);
