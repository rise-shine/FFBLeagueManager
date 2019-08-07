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
    url: "/pull/nfl/2018-regular/daily_player_stats.json?fordate=20181014",

    baseURL: "https://api.mysportsfeeds.com/v1.2",
    headers: {
      Authorization: "Basic " + key
    }
  })
    .then(function(response) {
      const statistics = response.data.dailyplayerstats.playerstatsentry;
      db.ffbdata
        .create({
          PlayerID: Sequelize.PlayerID,
          GameWeek: statistics.GameWeek,
          LastName: statistics.LastName,
          FirstName: statistics.FirstName,
          TeamName: statistics.TeamName,
          Position: statistics.Position,
          FantasyScore: statistics.FantasyScore,
          PassAtt: statistics.PassAtt,
          PassComp: statistics.PassComp,
          PassYard: statistics.PassYard,
          PassTd: statistics.PassTd,
          PassInt: statistics.PassInt,
          PassSack: statistics.PassSack,
          RushAtt: statistics.RushAtt,
          RushYds: statistics.RushYds,
          RushTd: statistics.RushTd,
          RecFumb: statistics.RecFumb,
          Sacks: statistics.Sacks,
          Safties: statistics.Safties,
          int: statistics.int,
          IntTd: statistics.IntTd,
          FumTd: statistics.FumTd,
          KrTd: statistics.KrTd,
          PrTd: statistics.PrTd,
          FgMade: statistics.FgMade,
          FgAtt: statistics.FgAtt,
          Fg19: statistics.Fg19,
          Fg29: statistics.Fg29,
          Fg39: statistics.Fg39,
          Fg49: statistics.Fg49,
          Fg50Plus: statistics.Fg50Plus,
          XpMade: statistics.XpMade
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
