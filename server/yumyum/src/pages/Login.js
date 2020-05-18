import React, { Component, useState } from "react";
import MainBody from "../components/mainBody";
import FormMain from "../components/formMain";


const Login = () => {
  // function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Thank you for signing up with the username: ${email}`)
    console.log(`Thank you for signing up with the password: ${password}`)
      setEmail("");
      setPassword("")
  };


  return (
    <div>
      <MainBody />
      <FormMain />
      <div className="form-div col-md-6 col-sm-12">
        <h2>Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" id="staticEmail" className="form-control"
                value={email}
                name="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="email" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword"
                value={password}
                name="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="password" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
