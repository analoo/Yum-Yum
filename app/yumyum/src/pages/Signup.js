import React, { useState } from "react";
import { UserContext } from "../components/UserProvider";
import { auth } from "../utils/firebase";
import axios from "axios";
import MainBody from "../components/Containers/mainBody";
import FormMain from "../components/Containers/formMain";
import { useSessionContext } from "../utils/GlobalState";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

const Signup = () => {
// getters and setters for setting state and global state

  const [user, setUser] = useSessionContext("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const [confPwd, setConfPwd] = useState("");
  const [error, setError] = useState(null);

// function to handle submit
  const handleSubmit = event => {
    event.preventDefault();
// firebase creates the new user and returns error if they already exist
    auth.createUserWithEmailAndPassword(email, password)

    .then(fbRes => {
      // create temp object to create user in YumYum DB after firebase response
      let createUser = {email:email};
      API.postUser(createUser)
      .then(dbUser => {
        // Set global state user to object returned of user
        setUser( {...user, 
          id: dbUser.id,
          email: dbUser.email
        })
        console.log(user);
        setPassword("");
        return <Redirect to="/Profile/" />
      })

    })
    .catch(err => {throw err});
  }

  return (
    <div>
      <MainBody>
        <FormMain>
        <h2>Signup</h2>
          <div className="form-div col-md-6 col-sm-12">
            <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
              {error !== null && (
                <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                  {error}
                </div>
              )}
              <form className="form user-form" onSubmit={handleSubmit}>

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

                <button type="submit" className="btn btn-primary">Signup</button>
              </form>
            </div>
          </div>
        </FormMain>
      </MainBody>
    </div >
  )
};

export default Signup;