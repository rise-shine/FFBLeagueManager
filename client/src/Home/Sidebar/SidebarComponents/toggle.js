import React, { Component } from "react";
import Switch from "react-switch";
 
class MyToggle extends Component {
  
    state = [{
        player1: false,
        player2: false
    }]

    constructor() {
    super();
   
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ player1: true });
  }

  handleChange1(checked){
      this.setState({ player2: true });
  }
 
  render() {
    return (
      <label>
        <span>player1</span>
        <Switch onChange={this.handleChange} checked={this.state.player1} />
        <span>player 2</span>
        <Switch onChange={this.handleChange1} checked= {this.state.player2} />
      </label>
    );
  }
}

export default MyToggle
