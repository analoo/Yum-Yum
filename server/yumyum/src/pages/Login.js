import React, { Component } from "react";
import MainBody from "../components/mainBody";
import FormMain from "../components/formMain";



class Login extends Component {
  // function Login() {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(`Thank you for signing up with the username: ${this.state.email}`)
    console.log(`Thank you for signing up with the password: ${this.state.password}`)
    this.setState({
      email: "",
      password: ""
    });

  };


  render() {
    return (
      <div>

        <MainBody />
        <FormMain />
        <div className="form-div col-md-6 col-sm-12">
          <h2>Login</h2>
          <form className="form">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="text" id="staticEmail" className="form-control"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  placeholder="email" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleInputChange}
                  placeholder="password" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    )
  };
}

export default Login;
