import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels() {
  const [state, setState] = React.useState(true);

  const handleChange = name => event => {
    setState(!state);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch checked={state} onChange={handleChange("qb1")} value="qb1" />
        }
        label="Qb1"
      />
      <FormControlLabel
        control={
          <Switch
            checked={!state}
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
