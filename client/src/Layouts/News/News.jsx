//Dependencies
import React from 'react'
import axios from 'axios';
import { Paper } from "@material-ui/core";
import '../News/News.css'

//Style
const style = {
    Paper: { 
    padding: 20,
    margin: 10, 
    maxHeight: 400,
    maxWidth:750, 
    overflow: 'scroll'}
  };

//Authentication for API 
const buf = Buffer.from(
    "d2a3f8bb-9b97-4e5a-97ef-5d2a60" + ":" + "Lokidog01",
    "ascii"
);
const key = buf.toString("base64");
console.log("base64 encoding", key);

//Component
export default class News extends React.Component{
    
state = {
    players: []
}
componentDidMount(){
    
    axios({
        //this returns stats for all players for a specific date
        method: "GET",
        url: "/pull/nfl/2018-regular/player_injuries.json",
        baseURL: "https://api.mysportsfeeds.com/v1.2",
        headers: {
          Authorization: "Basic " + key
        }
      })
        .then( response => {
          console.log("Response:",
            response.data.playerinjuries.playerentry
          );      
          this.setState({ players: response.data.playerinjuries.playerentry })
        })
        .catch(function(error) {
          console.log(error);
          
        });
        
}
render() {
    return(
        
        <Paper style={style.Paper}>
          <h1>Latest Updates</h1>
<ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#home">News</a></li>
  <li><a data-toggle="tab" href="#menu1">Injuries</a></li>
</ul>

<div class="tab-content">
  <div id="home" class="tab-pane fade in active">
    <h3>News</h3>
    <p>Coming soon!</p>
  </div>
  <div id="menu1" class="tab-pane fade">
    <h3>Injuries</h3>
    <div class="container">      
<table className="table table-striped">
  <thead>
    <tr>
      <th>Player</th>
      <th>Position</th>
      <th>Team</th>
      <th>Injury Status</th>
    </tr>
  </thead>
  <tbody>
      { this.state.players.map(player =>
      <tr>
      <td>{player.player.FirstName} {player.player.LastName}</td>
      <td>{player.player.Position}</td>
      <td>{player.team.Name} </td>
      <td>{player.injury}</td>
      </tr>)}
  </tbody>
</table>
</div>
  </div>
  
</div>
   </Paper> )
}
}