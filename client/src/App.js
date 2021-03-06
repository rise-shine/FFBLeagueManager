import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import News from './News/News';
import Home from "./Layouts/Home";
import Rosters from "./Layouts/Rosters/Rosters";
import {team , players } from "./team";
import Navbar from "./Home/Navbar/Navbar";
// import Sidebar from "./Home/Sidebar/Sidebar"

import Schedule from "./Layouts/Schedules/Schedules";
import NotLoggedIn from "../src/Home/NotLoggedIn"
import Teams from "./Layouts/Teams";
import Matchups from "./Layouts/Matchups";

export default class App extends Component {
  state = {
    players
  }

  

  getHomeByTeam() {
    return Object.entries(this.state.players.reduce((players, player) => {
      const { team } = player

      players[team] = players[team]
      ? [...players[team], player]
      : [player]

      return players;
    }, {})
    )
  }

  async componentDidMount() {
    const team = await(await fetch("http://localhost:3004/team")).json

    this.setState(team);
  }
  
  render() {
    const players = this.getHomeByTeam()
    return (


      <Router>
      <div>
        <Switch> 
          <Route exact path ="/" component={NotLoggedIn}/>
          <Route exact path="/home"
        
          render={props => (
              <Home
                {...props}
                players = {players}
               

              />
          )}
         
          />
           
          <Route exact path="/roster" component={ Rosters }/>
          <Route exact path="/schedule" component={Schedule}/>
          <Route exact path="/teams" component={Teams}/>
          <Route exact path="/matchups" component={Matchups}/>
        </Switch>
       
      
      </div>
    </Router>

      
    )
  }
}

