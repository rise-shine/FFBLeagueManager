import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setAge(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
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
            name: 'Quater-back',
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
            name: 'Quater-back',
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