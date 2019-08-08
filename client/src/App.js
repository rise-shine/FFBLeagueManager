import React, { Component, Fragment } from 'react';
// import { BrowserRouter, Link, Route } from 'react-router-dom';
// import Home from "./Home/Home";

import Footer from './Layouts/Footer';
// import News from './News/News';
import Home from "./Layouts/Home";
import {team , players } from "./team";
import Navbar from "./Home/Navbar/Navbar";
//import Sidebar from "./Home/Sidebar/Sidebar"
import Drawer from "./Home/Drawer"

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

  // async componentDidMount() {
  //   const team = await(await fetch("http://localhost:3004/team")).json

  //   this.setState(team);
  // }
  
  render() {
    const players = this.getHomeByTeam()
    return (

      <Fragment>
        <Navbar/>
        
        <Home 
        players = {players}/>
        <Drawer/>
        <Footer 
          team={team}
        />
      </Fragment>
      // <BrowserRouter>
      //    <Fragment>
      //   <ul>
      //     <li>
      //       <Link to="/"><Home/></Link>
      //     </li>
      //     <li>
      //       <Link to="/roster">Roster</Link>
      //     </li>
      //     <li>
      //       <Link to="/schedule">Schedule/ Rank</Link>
      //     </li>
      //   </ul>

      //   <Route exact path="/" render={() => <div>Home</div>} />
      //   <Route exact path="/" render={() => <div>Roster</div>} />
      //   <Route exact path="/" render={() => <div>Schedule/ Roster</div>} />
      // </Fragment>
      // </BrowserRouter>
   
    )
  }
}

