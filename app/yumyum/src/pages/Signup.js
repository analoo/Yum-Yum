import React, { useState } from "react";
import MainBody from "../components/mainBody";
import FormMain from "../components/formMain";

const Signup = () => {
  // function Login() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPwd, setConfPwd] = useState("")

  const handleSubmit = event => {
    event.preventDefault();
    firebase.auth().createuserWithEmailAndPassword(email, password)
    .then (signupRes => {
      console.log('signupRes')
      // Clear data fields
      setEmail = "";
      setPassword = "";
      setConfPwd = ""
      let signup = {email: signupRes.user.email }

      axios.post("api/user", signup)
      .then(res => window.location.replace("/profile"))
    })
  };

    return (
      <div>

        <MainBody >
        <FormMain>
        <div className="form-div col-md-6 col-sm-12">
          <h2>Signup</h2>
          <form className="form" onSubmit={handleSubmit}>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="text" id="signupEmail" className="form-control"
                  value={email}
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  placeholder="email" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" id="signupPassword" className="form-control"
                  value={password}
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                  placeholder="password" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Confirm Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="signupConfirm"
                  value={confPwd}
                  name="password"
                  onChange={e => setConfPwd(e.target.value)}
                  placeholder="confirm password" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
          </form>
        </div>
        </FormMain>
        </MainBody>
      </div>
    )
}

export default Signup;

