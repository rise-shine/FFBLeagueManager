//Dependencies
import React from 'react'
import axios from 'axios';
import SimpleTable from "../SimpleTable";

const buf = Buffer.from(
  "d2a3f8bb-9b97-4e5a-97ef-5d2a60" + ":" + "Lokidog01",
  "ascii"
);
const key = buf.toString("base64");
console.log("base64 encoding", key);

function createData(week, date, location, homeTeam, awayTeam) {
  return { week, date, location, homeTeam, awayTeam };
}

const rows = []


export default class Rosters extends React.Component {

  state = {
    rows: []
  };

  componentDidMount() {

    axios({
      //this returns stats for all players for a specific date
      method: "GET",
      url:
        "/pull/nfl/2018-regular/full_game_schedule.json?sort=game.starttime.A",
      baseURL: "https://api.mysportsfeeds.com/v1.2",
      headers: {
        Authorization: "Basic " + key
      }
    })
      .then(response => {

        const fullSchedule = response.data.fullgameschedule.gameentry;
        fullSchedule.forEach(game => {
            var newRow = createData(
                game.week,
                game.date + ", " + game.time,
                game.location,
                game.homeTeam.Name,
                game.awayTeam.Name
            )

            rows.push(newRow)

        })

        this.setState({ rows: rows })
        
      })
      .catch(function(error) {
        console.log(error);
      });
    }

  render() {

    return (
      <SimpleTable rows={this.state.rows}/>
    );
  }

}
