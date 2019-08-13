import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NotLoggedIn() {
  const classes = useStyles();


return (

  <div className={classes.root}>

    <Grid container spacing={3}>
      <Grid item xs>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h1>Please Log In</h1>
          <h3>Logging in allows you to access more features</h3>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
            </div>
           <a href="/xx"> <button type="button" class="btn btn-primary">Login</button> </a>

          </form>

        </Paper>
      </Grid>
      <Grid item xs>

      </Grid>
    </Grid>
</div>
    )
}