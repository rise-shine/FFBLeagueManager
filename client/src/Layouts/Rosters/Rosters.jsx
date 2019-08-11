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

function createData(team, player, position) {
  return { team, player, position };
}

const rows = []


export default class Rosters extends React.Component {

  state = {
    roster: [],
    rows: []
  };

  componentDidMount() {

    axios({
      //this returns stats for all players for a specific date
      method: "GET",
      url:
        "/pull/nfl/2018-regular/roster_players.json?fordate=20180923&sort=player.team",
      baseURL: "https://api.mysportsfeeds.com/v1.2",
      headers: {
        Authorization: "Basic " + key
      }
    })
      .then(response => {
        //Shorter version so I don't have to type it all out

        const rosters = response.data.rosterplayers.playerentry;
        const newRoster = rosters.filter(player => player.team);

        this.setState({ roster: newRoster})

        this.state.roster.forEach(player => {

          var newRow = createData(
            player.team.Name,
            player.player.FirstName + " " + player.player.LastName,
            player.player.Position
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
