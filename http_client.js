var http = require('http')
// get a url, provide a callback
http.get(process.argv[2], function (response) {
  // events listened and emitted when there.
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)