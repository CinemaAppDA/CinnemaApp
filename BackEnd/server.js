const http = require('http');
const app = require('./app')
const server = http.createServer(app)
const Port = process.env.PORT || 8080


server.listen(Port);

console.log('Server running on port:' + '' + Port);

