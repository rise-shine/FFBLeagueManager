import React, { Component, Fragment } from 'react';
// import { BrowserRouter, Link, Route } from 'react-router-dom';
// import Home from "./Home/Home";
import Header from "./Layouts/Header";
import Footer from './Layouts/Footer';
// import News from './News/News';
import Home from "./Layouts/Home"

export default class App extends Component {
  state = {
    team : []
  }

  // async componentDidMount() {
  //   const team = await(await fetch("http://localhost:3004/team")).json

  //   this.setState(team);
  // }
  
  render() {
    return (

      <Fragment>
        <Header />
        <Home />
        <Footer />
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

