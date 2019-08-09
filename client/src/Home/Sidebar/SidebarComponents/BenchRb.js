import React from "react";
import ReactDOM from "react-dom";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class RbBench extends React.Component {
  constructor(props) {
    super(props);
    this.handleIsPlaying = this.handleIsPlaying.bind(this);
    this.handleIsBench = this.handleIsBench.bind(this);
    this.state = { isPlaying: false, selectedRB: [] };
  }
  handleIsPlaying() {
    this.setState({ isPlaying: true });
  }

  handleIsBench() {
    this.setState({ isPlaying: false });
  }

  handleRosterChange = playerId => {
    this.setState({
      selectedRB: [...this.state.selectedRB, +playerId.target.value]
    });
    console.log(playerId.target.value);
  };

  render() {
    const isPlaying = this.state.isPlaying;
    let toggle;

    const { selectedRB } = this.state;

    if (isPlaying < 2) {
      toggle = <Switch onClick={this.handleLogoutClick} />;
    } else {
      toggle = <Switch onClick={this.handleLoginClick} />;
    }

    const lockRoster = selectedRB.length >= 2;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              onChange={this.handleRosterChange}
              disabled={!this.checked && lockRoster}
              value={1}
            />
          }
          label="Rb1"
        />
        <FormControlLabel
          control={
            <Switch
              onChange={this.handleRosterChange}
              disabled={!this.checked && lockRoster}
              value={2}
            />
          }
          label="Rb2"
        />
        <FormControlLabel
          control={
            <Switch
              onChange={this.handleRosterChange}
              disabled={!this.checked && lockRoster}
              value={3}
            />
          }
          label="Rb3"
        />
        <FormControlLabel
          control={
            <Switch
              onChange={this.handleRosterChange}
              disabled={!this.checked && lockRoster}
              value={4}
            />
          }
          label="Rb4"
        />
      </FormGroup>
    );
  }
}
export default RbBench;
// export default function SwitchLabels() {
//   const [state, setState] = React.useState(true);
//  const handleChange = name => event => {
//       if (state < 2){
//             setState(!state)
//       }

//   };
//   handleChange(() => {
//     function handleStatusChange(status){
//       setState(status.state)
//     }
//   })

// return (
//   <FormGroup row>
//     <FormControlLabel
//       control={
//         <Switch checked={state.Rb1}
//         onChange={handleChange(handleStatusChange('Rb1'))}
//         value="Rb1" />
//       }
//       label="Rb1"
//     />
//     <FormControlLabel
//       control={
//         <Switch
//           checked={state.Rb2}
//           onChange={handleChange('Rb2')}
//           value="Rb2"
//           color="primary"
//         />
//       }
//       label="Rb2"
//     />
//      <FormControlLabel
//       control={
//         <Switch checked={state.Rb3}
//          onChange={handleChange('Rb3')}
//          value="Rb3" />
//       }
//       label="Rb3"
//     />
//     <FormControlLabel
//       control={
//         <Switch
//           checked={state.Rb4}
//           onChange={handleChange('Rb4')}
//           value="Rb4"
//           color="primary"
//         />
//       }
//       label="Rb4"
//     />

//   </FormGroup>
// );
// }
