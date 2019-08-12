import React from "react";
import News from "../Layouts/News/News";
import { Paper } from "@material-ui/core";
const style = {
    Paper: { 
    padding: 20,
    margin: 10, 
    maxHeight: 400,
    maxWidth:8000,
    textAlign:"center"
    
   }
  };

function NotLoggedIn() {
  return(
  <container>
    <Paper style={style.Paper}>
      <h1>Click Here to Log In</h1>
      <h2>Logging in allows you to access full features</h2>
    </Paper>
  <News />
  </container>) 
  

}

export default NotLoggedIn;
