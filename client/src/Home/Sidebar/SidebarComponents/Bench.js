import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels() {


  const [state, setState] = React.useState({
   Quaterback: { 
     qb1: true,
    qb2: false
  },
  Runninback:{
    rb1: true,
    rb2: false,
    rb3: true,
    rb4: false
  },
   Widereciever:{
     wr1: true,
     wr2: false,
     wr3: false,
     wr4:false,
     wr5: true,
     wr6: true
   }
  
  });

 

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
 

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={state.qb1}
            onChange={handleChange("qb1")}
            value="qb1"
          />
        }
        label="Qb1"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.qb2}
            onChange={handleChange("qb2")}
            value="qb2"
            color="primary"
          />
        }
        label="Qb2"
      />
    </FormGroup>
  );
}
