var fs = require('fs');
// added callback which happens within the filesystem read, and finishes
// whenever it does. Other code can be executed beyond this block.
var filePath = fs.readFile(process.argv[2], function(err, data){
  var lines = data.toString().split('\n').length - 1;
  console.log(lines);
});

