const mongoose = require('mongoose')


/**Movie's a schema */

var Movies = new mongoose.Schema({
  Movie_Title: String,
  Movie_Genre: String,
  Ratings: Number,
  Movie_Director: String,
  Movie_Duraton: String,
  Country: String,
  Discription: String,
  Release_Date: String,
  MovieImage:String,
  Available_Dates: {
    Day1: {
      Date: String,
      Time_Slot: {
        Morning: {
          Time: String,
          Seat: Number
        }
      }
    },
    Day2: {
      Date: String,
      Time_Slot: {
        Morning: {
          Time: String,
          Seat: Number
        }
      }
    },
    Day3: {
      Date: String,
      Time_Slot: {
        Morning: {
          Time: String,
          Seat: Number
        }
      }
    },
    Day4: {
      Date: String,
      Time_Slot: {
        Morning: {
          Time: String,
          Seat: Number
        }
      }
    },
    Day5: {
      Date: String,
      Time_Slot: {
        Morning: {
          Time: String,
          Seat: Number
        }
      }
    },
    Day6: {
      Date: String,
      Time_Slot: {
        Morning: {
          Time: String,
          Seat: Number
        }
      }
    },
    Day7
    : {
      Date: String,
      Time_Slot: {
        Morning: {
          Time: String,
          Seat: Number
        }
      }
    }
  }

});


var moviesModel = mongoose.model('Movies',Movies);


module.exports = moviesModel;