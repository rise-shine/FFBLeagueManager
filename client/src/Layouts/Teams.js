import React from "react";
import rosters from "../rosters.json";
import '../Layouts/Teams.css';
import Drawer from "../Home/Drawer.js"
export default class Roster extends React.Component {

    state = {
        rosters
    }

    
    render() {
       
        console.log(this.state.rosters)

        return (
        <>

            <Drawer />
           <div>
                {this.state.rosters.map(player => {

                    return (
                        <div class="teamsDiv">
                            <ul>
                                <span class="teamNameText">{player.Team.name} </span>
                                <li><span class="rosterText">QB: </span>{player.QB1.first} {player.QB1.last}</li>
                                <li><span class="rosterText">QB: </span>{player.QB2.first} {player.QB2.last}</li>
                                <li><span class="rosterText">RB: </span>{player.RB1.first} {player.RB1.last}</li>
                                <li><span class="rosterText">RB: </span>{player.RB2.first} {player.RB2.last}</li>
                                <li><span class="rosterText">RB: </span>{player.RB3.first} {player.RB3.last}</li>
                                <li><span class="rosterText">RB: </span>{player.RB4.first} {player.RB4.last}</li>
                                <li><span class="rosterText">WR: </span>{player.WR1.first} {player.WR1.last}</li>
                                <li><span class="rosterText">WR: </span>{player.WR2.first} {player.WR2.last}</li>
                                <li><span class="rosterText">WR: </span>{player.WR3.first} {player.WR3.last}</li>
                                <li><span class="rosterText">WR: </span>{player.WR4.first} {player.WR4.last}</li>
                                <li><span class="rosterText">WR: </span>{player.WR5.first} {player.WR5.last}</li>
                                <li><span class="rosterText">WR: </span>{player.WR6.first} {player.WR6.last}</li>
                                <li><span class="rosterText">K: </span>{player.KIC.first} {player.KIC.last}</li>
                                <li><span class="rosterText">DEF: </span>{player.DEF.city} {player.DEF.team}</li>
                            </ul>
                        </div>
                )
                    
                })}
           </div>
           </>

        )
    }
    
}