import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Layouts/Footer';
// import News from './News/News';
import Home from "./Layouts/Home";
import Roster from "./Layouts/Roster";
import {team , players } from "./team";
import Navbar from "./Home/Navbar/Navbar";
// import Sidebar from "./Home/Sidebar/Sidebar"
import Drawer from "./Home/Drawer";
import Schedule from "./Layouts/Schedule";

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
        <Navbar />
        <Switch>
          <Route exact path="/"
          render={props => (
              <Home
                {...props}
                players = {players}
              />
          )}
          />
          <Route exact path="/roster" component={Roster}/>
          <Route exact path="/schedule" component={Schedule}/>
        </Switch>
        <Drawer/>
        <Footer team={team}/>
      </div>
    </Router>

      // <Fragment>
      //   <Navbar/>
        
      //   <Home 
      //   players = {players}/>
      //   <Drawer/>
      //   <Footer 
      //     team={team}
      //   />
      // </Fragment>
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

