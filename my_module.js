var fs = require('fs');
var path = require('path');

// exports the function from the object it's assigned to
module.exports = function (dirName, fileExt, callback) {
 
  fs.readdir(dirName, function (err, data) {
    if (err)
      return callback(err);
 
    data = data.filter(function (file) {
      return path.extname(file) === '.' + fileExt;
    })
 
    callback(null, data)
  })
}