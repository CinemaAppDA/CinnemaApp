const express = require('express');
const app = express();
const MovieRoute = require('./Routes/Movies');
const mongoose = require('mongoose');



/**Testing if get method works */
app.get('/',(req,res)=>{
    res.send('I am running');
    console.log("rtyuio")
});


app.use('/cinema/movies',MovieRoute);
//app.use("/cinema/movies/id", MovieRoute);


/**Database connection*/
mongoose.connect( 'mongodb://localhost:27017/movieDB',(error,db)=>{
/**Checking the connection*/
  useNewUrlParser: true;
  useUnifiedTopogy: true;
  console.log('Connected to database')
});





module.exports = app; /**exporting app file */


