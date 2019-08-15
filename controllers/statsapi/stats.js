const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const db = require("../../models");
const buf = Buffer.from(
  "d2a3f8bb-9b97-4e5a-97ef-5d2a60" + ":" + "Lokidog01",
  "ascii"
);
const key = buf.toString("base64");
console.log("base64 encoding", key);

//This is used to store statistics for kickers and punters
function kickerAdd(game) {
  let gameWeek = 1;

  db.Playerstat.create({
    PlayerID: game.player.ID,
    TeamID: game.team.ID,
    GameWeek: gameWeek,
    LastName: game.player.LastName,
    FirstName: game.player.FirstName,
    TeamName: game.team.Name,
    Position: game.player.Position,
    FgMade: game.stats.FgMade["#text"],
    FgAtt: game.stats.FgAtt["#text"],
    Fg19: game.stats.FgMade1_19["#text"],
    Fg29: game.stats.FgMade20_29["#text"],
    Fg39: game.stats.FgMade30_39["#text"],
    Fg49: game.stats.FgMade40_49["#text"],
    Fg50Plus: game.stats.FgMade50Plus["#text"],
    XpMade: game.stats.XpMade["#text"]
  });
}
function kickerScoring(game) {
  let gameWeek = 1;
  let xp = parseInt(game.stats.XpMade["#text"]);
  let fg50 = parseInt(game.stats.FgMade50Plus["#text"]);
  let fgmade = parseInt(game.stats.FgMade["#text"]);

  let fantasyTotal = xp + (fgmade - fg50) * 3 + fg50 * 4;

  db.Playerstat.update(
    {
      FantasyScore: fantasyTotal
    },
    {
      where: {
        PlayerID: game.player.ID,
        GameWeek: gameWeek
      }
    }
  );
}

//This is used to store statistics for offensive players
function dbAdd(game) {
  let gameWeek = 1;
  db.Playerstat.create({
    PlayerID: game.player.ID,
    TeamID: game.team.ID,
    GameWeek: gameWeek,
    LastName: game.player.LastName,
    FirstName: game.player.FirstName,
    TeamName: game.team.Name,
    Position: game.player.Position,
    PassAtt: game.stats.PassAttempts["#text"],
    PassComp: game.stats.PassCompletions["#text"],
    PassYard: game.stats.PassYards["#text"],
    PassTd: game.stats.PassTD["#text"],
    PassInt: game.stats.PassInt["#text"],
    PassSack: game.stats.PassSacks["#text"],
    RushAtt: game.stats.RushAttempts["#text"],
    RushYds: game.stats.RushYards["#text"],
    RushTd: game.stats.RushTD["#text"],
    RecYds: game.stats.RecYards["#text"],
    RecTd: game.stats.RecTD["#text"]
  });
}

function offensiveScoring(game) {
  let gameWeek = 1;
  let fantasyTotal =
    parseInt(game.stats.PassYards["#text"]) / 20 +
    parseInt(game.stats.PassTD["#text"]) * 3 +
    parseInt(game.stats.PassInt["#text"]) * -1 +
    parseInt(game.stats.RushYards["#text"]) / 10 +
    parseInt(game.stats.RushTD["#text"]) * 6 +
    parseInt(game.stats.RecYards["#text"]) / 10 +
    parseInt(game.stats.RecTD["#text"]) * 3;
  db.Playerstat.update(
    {
      FantasyScore: fantasyTotal
    },
    {
      where: {
        PlayerID: game.player.ID,

        GameWeek: gameWeek
      }
    }
  );
}

//this is used to store statistics for team defense scoring
function defensiveAdd(game) {
  let gameWeek = 1;
  db.Playerstat.create({
    TeamID: game.team.ID,
    GameWeek: gameWeek,
    LastName: game.team.Name,
    FirstName: game.team.City,
    Sacks: game.stats.Sacks["#text"],
    Safties: game.stats.Safeties["#text"],
    IntTd: game.stats.IntTD["#text"],
    int: game.stats.Interceptions["#text"],
    KrTd: game.stats.KrTD["#text"],
    PrTd: game.stats.PrTD["#text"],
    FumTd: game.stats.FumTD["#text"]
  });
}

function defensiveScoring(game) {
  let gameWeek = 1;

  let fantasyTotal =
    parseInt(game.stats.Sacks["#text"]) * 1 +
    parseInt(game.stats.Safeties["#text"]) * 2 +
    parseInt(game.stats.Interceptions["#text"]) * 1 +
    parseInt(game.stats.KrTD["#text"]) * 6 +
    parseInt(game.stats.PrTD["#text"]) * 6 +
    parseInt(game.stats.FumTD["#text"]) * 6 +
    parseInt(game.stats.IntTD["#text"]) * 6;
  db.Playerstat.update(
    {
      FantasyScore: fantasyTotal
    },
    {
      where: {
        TeamID: game.team.ID,
        LastName: game.team.Name,
        GameWeek: gameWeek
      }
    }
  );
}

// Defining how Express will work with the API Routes
router.get("/stats", function(req, res) {
  console.log("sending query");

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
      let data = response.data.dailyplayerstats.playerstatsentry;
      let playerData = data.map(function(x) {
        let position = x.player.Position;

        switch (position) {
          case "QB":
            {
              dbAdd(x);
              offensiveScoring(x);
            }

            break;
          case "RB":
            {
              dbAdd(x);
              offensiveScoring(x);
            }
            break;
          case "WR":
            {
              dbAdd(x);
              offensiveScoring(x);
            }
            break;
          case "TE":
            {
              dbAdd(x);
              offensiveScoring(x);
            }
            break;
          case "K":
            {
              kickerAdd(x);
              kickerScoring(x);
            }
            break;
          default:
            console.log("This is a defensive player or punter", x.player.ID);
        }

        return x.player.ID, position;
      });
    })

    .catch(function(error) {
      res.send("there is an error");
      console.log(error);
    });

  axios({
    //this returns stats for all defenses for a specific date
    method: "GET",
    url:
      "/pull/nfl/2018-regular/team_gamelogs.json?team=63&date=from-20181004-to-20181008",
    baseURL: "https://api.mysportsfeeds.com/v1.2",
    headers: {
      Authorization: "Basic " + key
    }
  })
    .then(function(response) {
      let data = response.data.teamgamelogs.gamelogs;
      console.log(response);
      res.send(data);
      let defData = data.map(function(x) {
        defensiveAdd(x);
        defensiveScoring(x);
        return x.team.ID;
      });
    })

    .catch(function(error) {
      console.log(error);
    });
});
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.send("no path specified");
});

module.exports = router;
