import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels() {
  const [state, setState] = React.useState(true);

  const handleChange = name => event => {
      if (state < 2){
            setState(!state)
      }
  
  };
 

 


  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch checked={state.Rb1} 
          onChange={handleChange('Rb1')} 
          value="Rb1" />
        }
        label="Rb1"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.Rb2}
            onChange={handleChange('Rb2')}
            value="Rb2"
            color="primary"
          />
        }
        label="Rb2"
      />
       <FormControlLabel
        control={
          <Switch checked={state.Rb3}
           onChange={handleChange('Rb3')} 
           value="Rb3" />
        }
        label="Rb3"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.Rb4}
            onChange={handleChange('Rb4')}
            value="Rb4"
            color="primary"
          />
        }
        label="Rb4"
      />
      
    </FormGroup>
  );
}
