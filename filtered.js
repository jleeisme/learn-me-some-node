var fs = require('fs')
var path = require('path')
// make a callback, for each file, if the extension name has '.' it's 
// processed [3], and printed. 
fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})
