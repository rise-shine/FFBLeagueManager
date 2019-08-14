import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './NotLoggedIn.css'
// import { Link } from "react-router-dom";


class NotLoggedIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
    console.log(this.state)
}

validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
}

handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleSubmit = event => {
    event.preventDefault();
}
classes(){
  return
}
render(){

  return ( 
  <container>
    <h1>League Manager</h1>
    <div id="entireLogin">
 
  
     
            <h2>Please Log In</h2>
            <h3>Logging in allows you to access more features</h3>
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Email"><h3>Email</h3></label>
                        <input
                            type="email"
                            className="form-control"
                            name="exampleInputEmail1"
                            placeholder="Email"
                        
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password"><h3>Password</h3></label>
                        <input
                            type="password"
                            className="form-control"
                            name="exampleInputPassword1"
                            placeholder="Password"
                            onChange={this.handleChange} />
                    </div>
                    <p
                        id="createNewAccount"
                        data-toggle="modal"
                        data-target="#loginModal">
                        Create new account?
                     </p>

                    <button  
                    type="submit">
                        Login
                        </button>
                </form>

                <div id="loginModal" class="modal fade" role="dialog">

                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Create New Account</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>

                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="createEmail">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="createEmail"
                                        placeholder="Enter valid email address"
                                        value={this.state.email}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="createPassword">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="createPassword"
                                        placeholder="Insert a password"
                                        value={this.state.password}
                                        onChange={this.handleChange} />
                                </div>
                                <button
                                    type="submit">
                                    Create Account
                    </button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
  
  </div>
   </container>    
  
      )
}
}
export default NotLoggedIn