import React, { useState } from "react";
import { UserContext } from "../components/UserProvider";
import { auth } from "../utils/firebase";
import axios from "axios";
import MainBody from "../components/mainBody";
import FormMain from "../components/formMain";

const Signup = () => {
  // function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  //  const [confPwd, setConfPwd] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler =
    (event, email, password) => {
      event.preventDefault();
      setEmail("");
      setPassword("");
      setUserName("");
    };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    }
    else if (name === "password") {
      setPassword(value);
    }
    else if (name === "userName") {
      setUserName(value);
    }

  }


  return (
    <div>
      <MainBody>
        <FormMain>
          <div className="form-div col-md-6 col-sm-12">
            <h2>Signup</h2>
            <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
              {error !== null && (
                <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                  {error}
                </div>
              )}
              <form className="form">

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">User Name</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="userName"
                      value={userName}
                      name="userName"
                      onChange={e => handleChange(e)}
                      placeholder="User Name" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="text" id="signupEmail" className="form-control" 
                      value={email}
                      name="email"
                      onChange={e => handleChange(e)}
                      placeholder="email" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" id="signupPassword" className="form-control"
                      value={password}
                      name="password"
                      onChange={e => handleChange(e)}
                      placeholder="password" />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={event => { createUserWithEmailAndPasswordHandler(event, email, password); }}>Signup</button>
              </form>
            </div>
          </div>
        </FormMain>
      </MainBody>
    </div >
  )
};

export default Signup;