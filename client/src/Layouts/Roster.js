import React from "react";
import rosters from "../rosters.json";

export default class Roster extends React.Component {

    state = {
        rosters
    }

    
    render() {

        console.log(this.state.rosters)

        return (

           <div>
                {this.state.rosters.map(player => {

                    return (
                        <ul>
                        {player.Team.name}
                        <li>QB: {player.QB1.first} {player.QB1.last}</li>
                        <li>QB: {player.QB2.first} {player.QB2.last}</li>
                        <li>RB: {player.RB1.first} {player.RB1.last}</li>
                        <li>RB: {player.RB2.first} {player.RB2.last}</li>
                        <li>RB: {player.RB3.first} {player.RB3.last}</li>
                        <li>RB: {player.RB4.first} {player.RB4.last}</li>
                        <li>WR: {player.WR1.first} {player.WR1.last}</li>
                        <li>WR: {player.WR2.first} {player.WR2.last}</li>
                        <li>WR: {player.WR3.first} {player.WR3.last}</li>
                        <li>WR: {player.WR4.first} {player.WR4.last}</li>
                        <li>WR: {player.WR5.first} {player.WR5.last}</li>
                        <li>WR: {player.WR6.first} {player.WR6.last}</li>
                        <li>K: {player.KIC.first} {player.KIC.last}</li>
                        <li>DEF: {player.DEF.city} {player.DEF.team}</li>
                        </ul>
                )
                    
                })}
           </div>

        )
    }
}