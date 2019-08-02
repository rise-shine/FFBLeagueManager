import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const style = {
  Paper: { padding: 20, margin: 10 }
};

export default ({ players }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.Paper}>
        {players.map(([sqaud, players]) => (
          <Fragment>
            <Typography style={{ textTransform: "capitalize" }}>
              {sqaud}
            </Typography>
            <List component="ul">
              {players.map(({title}) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>News</Paper>
    </Grid>
  </Grid>
);