import React, { Component, useState } from "react";
import MainBody from "../components/mainBody";


class Login extends Component {
  // function Login() {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = evenet => {

  }


  render() {
    return (
      <div>
        <MainBody />
        <h1>Login</h1>
        <form className="form">
          <div className="form-group row">
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" readonly clasName="form-control-plaintext"
                value={this.state.firstName}
                name="email"
                onChange={this.handleInputChange}
                placeholder="username" />
            </div>
          </div>
          {/* <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
            </div>
       */}
      </form>
          </div>
        )
      };
    }
    
    export default Login;
