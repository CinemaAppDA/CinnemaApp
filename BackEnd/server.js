const http = require('http') ; 
const app = require('./app') ;
const server = http.createServer(app) ; 
const Port = process.env.PORT || 5000 ;
const env = require('dotenv').config() ;


server.listen(port , () => {
    console.log('Running on port ' + port); 
}) ; 
