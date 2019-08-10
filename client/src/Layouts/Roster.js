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
                        <li>Quarterback: {player.QB1.first} {player.QB1.last}</li>
                        <li>Quarterback: {player.QB2.first} {player.QB2.last}</li>
                        <li>Running Back: {player.RB1.first} {player.RB1.last}</li>
                        <li>Running Back: {player.RB2.first} {player.RB2.last}</li>
                        <li>Running Back: {player.RB3.first} {player.RB3.last}</li>
                        <li>Running Back: {player.RB4.first} {player.RB4.last}</li>
                        <li>Receiver: {player.WR1.first} {player.WR1.last}</li>
                        <li>Receiver: {player.WR2.first} {player.WR2.last}</li>
                        <li>Receiver: {player.WR3.first} {player.WR3.last}</li>
                        <li>Receiver: {player.WR4.first} {player.WR4.last}</li>
                        <li>Receiver: {player.WR5.first} {player.WR5.last}</li>
                        <li>Receiver: {player.WR6.first} {player.WR6.last}</li>
                        <li>Kicker: {player.KIC.first} {player.KIC.last}</li>
                        <li>Defense: {player.DEF.team}</li>
                        </ul>
                )
                    
                })}
           </div>

        )
    }
}