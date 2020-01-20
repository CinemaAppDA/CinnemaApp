const express = require('express') ; 
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/route');




app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//connect DB

app.use('/route' , route)

//Connect to mongoDB
var mongoDB = 'mongodb://localhost:27017/movieDB';
mongoose.connect(mongoDB);

//test connection
mongoose.connection.on('connected', ()=>{
    console.log('connect to db mongodb @ 27017');
});

mongoose.connection.on('error', (err)=>{

    if(err)
    {
        console.log('Error in the database connection');

    }
    
});

module.exports = app;