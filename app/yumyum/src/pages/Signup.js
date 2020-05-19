import React, { useState } from "react";
import firebase from "firebase-admin";
import axios from "axios";
import MainBody from "../components/mainBody";
import FormMain from "../components/formMain";

const Signup = () => {
  // function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useSate("");
  //  const [confPwd, setConfPwd] = useState("");
  const [error, setError] = useState(null);
  const signinWithEmailAndPasswordHandler =
    (event, email, password) => {
      event.preventDefault();
      setEmail("");
      setPassword("");
      setUserName("");
    };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    }
    else if (name === "password") {
      setPassword(value);
    }
    else if (name === "displayName") {
      setDisplayName(value);
    }

    axios.post("api/user", signup)
      .then(res => window.location.replace("/profile"))
  }
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

            <button type="submit" className="btn btn-primary" onClick={event => {createUserWithEmailAndPasswordHandler(event, email, password);}}>Login</button>
            <button className="bg-green-500 hover:bg-green-600 w-full py-2 text-white">
              Sign In with Google
            </button>
          <p className="text-center my-3">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 hover:text-blue-600">
              Sign in here
          </Link>
          </p>
          </form>
        </div>
        </FormMain>
        </MainBody>
      </div >
    )
}

export default Signup;

