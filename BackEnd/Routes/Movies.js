const express = require("express");
const router = express.Router();
const movies = require("../Models/MoviesModel");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')


/**Posting all the movies on the database for test purposes */
router.post("/", (req, res) => {
  var objects = new movies({
    Movie_Title: "Jumanji",
    Movie_Genre: " Science Fiction ",
    Ratings: 13,
    Movie_Director: "Ryan Coogler",
    Movie_Duraton: "135 minutes",
    Country: "Asia",
    Discription:
      "Black Panther follows T'Challa who, after the events of Captain America: Civil War, returns home to the isolated, technologically advanced African nation of Wakanda to take his place as King. However, when an old enemy reappears on the radar, T'Challa's mettle as King and Black Panther is tested when he is drawn into a conflict that puts the entire fate of Wakanda and the world at risk.",
    Release_Date: "May 15, 2018",
    MovieImage:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1503023345310-bd7c1de61c7d%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhuman&docid=ZaycYywhXLmIVM&tbnid=02pOGe6MlAbm-M%3A&vet=10ahUKEwjk9qvHk5LnAhWNlxQKHbadA_wQMwh8KAEwAQ..i&w=1000&h=1250&bih=789&biw=1440&q=image&ved=0ahUKEwjk9qvHk5LnAhWNlxQKHbadA_wQMwh8KAEwAQ&iact=mrc&uact=8",
    Available_Dates: {
      Day1: {
        Date: "15 May 2018",
        Time_Slot: {
          Morning: {
            Time: "9h00",
            SeatAvail: 20
          },
          Afternoon: {
            Time: "12h00",
            SeatAvail: 20
          },
          Night: {
            Time: "3h00",
            SeatAvail: 20
          }
        }
      },
      Day2: {
        Date: "16 May 2018",
        Time_Slot: {
          Morning: {
            Time: "9h00",
            Seat: 20
          },
          Afternoon: {
            Time: "9h00",
            SeatAvail: 20
          },
          Night: {
            Time: "12h00",
            SeatAvail: 20
          }
        }
      },
      Day3: {
        Date: "17 May 2018",
        Time_Slot: {
          Morning: {
            Time: "9h00",
            Seat: 20
          },
          afternoon: {
            Time: "12h00",
            SeatAvail: 20
          },
          Night: {
            Time: "3h00",
            SeatAvail: 20
          }
        }
      },
      Day4: {
        Date: "18 May 2018",
        Time_Slot: {
          Morning: {
            Time: "9h00",
            Seat: 20
          },
          Afternoon: {
            Time: "12h00",
            SeatAvail: 20
          },
          Night: {
            Time: "3h00",
            SeatAvail: 20
          }
        }
      },
      Day5: {
        Date: "19 May 2018",
        Time_Slot: {
          Morning: {
            Time: "9h00",
            Seat: 20
          }
        }
      },
      Day6: {
        Date: "20 May 2018",
        Time_Slot: {
          Morning: {
            Time: "12h00",
            Seat: 20
          }
        }
      },
      Day7: {
        Date: "21 May 2018",
        Time_Slot: {
          Morning: {
            Time: "3h00",
            Seat: 20
          }
        }
      }
    }
  });
  objects.save(function(err, results) {
    res.send(results);
    console.log(results);
  });


});



/*posting a movie by specific id **/
router.get("/:movies_id", (req, res) => {
  var id = req.params.movies_id;
movies.findById(id,function(err,results){
res.send({
    results
});
  
});

});

/**Getting all the movies from the database */
router.get("/", (req, res) => {
  movies.find(function(error,results) {
    res.send(results);
  });
});

module.exports = router;
