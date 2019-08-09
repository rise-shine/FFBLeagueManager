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
                        <li>Team: {player.DEF.team}</li>
                        <li>QB1: {player.QB1.first} {player.QB1.last}</li>
                        <li>QB2: {player.QB2.first} {player.QB2.last}</li>
                        <li>RB1: {player.RB1.first} {player.RB1.last}</li>
                        <li>RB2: {player.RB2.first} {player.RB2.last}</li>
                        <li>RB3: {player.RB3.first} {player.RB3.last}</li>
                        <li>RB4: {player.RB4.first} {player.RB4.last}</li>
                        <li>WR1: {player.WR1.first} {player.WR1.last}</li>
                        <li>WR2: {player.WR2.first} {player.WR2.last}</li>
                        <li>WR3: {player.WR3.first} {player.WR3.last}</li>
                        <li>WR4: {player.WR4.first} {player.WR4.last}</li>
                        <li>WR5: {player.WR5.first} {player.WR5.last}</li>
                        <li>WR6: {player.WR6.first} {player.WR6.last}</li>
                        <li>KIC: {player.KIC.first} {player.KIC.last}</li>
                        </ul>
                )
                    
                })}
           </div>

        )
    }
}