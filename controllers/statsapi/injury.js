const router = require("express").Router();
const db = require("../../models");
const axios = require("axios");
const buf = Buffer.from(
  "d2a3f8bb-9b97-4e5a-97ef-5d2a60" + ":" + "Lokidog01",
  "ascii"
);
const key = buf.toString("base64");

// route for pulling stats from api and writing them to the database
router.get("/gamestates", function(req, res) {
  axios({
    //this returns stats for all players for a specific date
    method: "GET",
    url: "/pull/nfl/2018-regular/player_injuries.json?fordate=20181014",

    baseURL: "https://api.mysportsfeeds.com/v1.2",
    headers: {
      Authorization: "Basic " + key
    }
  })
    .then(function(response) {
      const statistics = response.data.playinjuries.playerentry;
      db.ffbdata
        .create({
          PlayerID: Sequelize.PlayerID,
          GameWeek: statistics.GameWeek,
          LastName: statistics.LastName,
          FirstName: statistics.FirstName,
          TeamName: statistics.TeamName,
          Position: statistics.Position
        })
        .then(function(response) {
          res.json(response);
        })
        .catch(err => {
          console.log(err);
        });
      console.log(
        "query response",
        response.data.dailyplayerstats.playerstatsentry
      );
    })
    .catch(function(error) {
      console.log(error);
    });
});
