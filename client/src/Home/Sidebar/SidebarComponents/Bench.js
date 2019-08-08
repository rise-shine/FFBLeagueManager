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

      <Fragment>
    <form autoComplete="off">
      <Button className={classes.button} onClick={handleOpen}>
        
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Quarter-back</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          inputProps={{
            name: 'Quarter-back',
            id: 'demo-controlled-open-select',
          }}
        >
         
          <MenuItem value={1}>QB1</MenuItem>
          <MenuItem value={2}>QB2</MenuItem>
          
        </Select>
      </FormControl>   
    </form>
    <form autoComplete="off">
      <Button className={classes.button} onClick={handleOpen}>
        
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Quarter-back</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          inputProps={{
            name: 'Quarter-back',
            id: 'demo-controlled-open-select',
          }}
        >
         
          <MenuItem value={1}>QB1</MenuItem>
          <MenuItem value={2}>QB2</MenuItem>
          
        </Select>
      </FormControl>   
    </form>
    </Fragment>

  );
}
