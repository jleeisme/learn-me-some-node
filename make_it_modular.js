var myModule = require('./my_module.js');
var dirName = process.argv[2];
var fileExt = process.argv[3];

// using the my_module file, if there's an error it's raised, otherwise
// data - the files) are logged.
myModule(dirName, fileExt, function (err, data){
  if (err)
    return console.error('Error:', err);

  data.forEach(function(file) {
    console.log(file);
  })
})
