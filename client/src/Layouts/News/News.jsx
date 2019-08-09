//Dependencies
import React from 'react'
import axios from 'axios';
import { Paper } from "@material-ui/core";
import '../News/News.css'
//Style
const style = {
    Paper: { padding: 20, margin: 10, maxHeight: 400, overflow: 'scroll'}
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
            //Shorter version so I don't have to type it all out 
            
          console.log(
            "Response:",
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
            <h1>Current Injuries</h1>
        <div>
            {/*WILL MAKE THIS INTO MORE OF CHART LATER JUST TESTING OUT THE WRITING TO THE DOM*/}
           { this.state.players.map(player => <div>
        <h3>Player</h3>{player.player.FirstName} {player.player.LastName} <h3>Position</h3> {player.player.Position} <h3>Team</h3> {player.team.City} {player.team.Name} <h3>Injury</h3> {player.injury}</div>)} 
        </div>
   </Paper> )
}
}
