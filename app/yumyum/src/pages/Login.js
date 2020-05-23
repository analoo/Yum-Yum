import React, { useState } from "react";
import { auth } from "../utils/firebase";
import MainBody from "../components/Containers/mainBody";
import FormMain from "../components/Containers/formMain";
import API from "../utils/API";
import { useSessionContext } from "../utils/GlobalState";
import { useHistory } from "react-router-dom";




const Login = () => {

  // brings in global state : we are storing, search, global user id, favorites, user generated
  const [state, dispatch] = useSessionContext();

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // enable load (push) of another page
  const history = useHistory();

  
  const handleSubmit = event => {
    event.preventDefault();

    // LOGIN to Firebase
    auth.signInWithEmailAndPassword(email, password)

    // User FireBase Response to get the email and get the ID from Yum&Yum DB
    .then(fbRes => {
      
      let userEmail=fbRes.user.email;
      API.getUserByEmail(userEmail)

    // Get the ID from Yum&Yum DB Response and set global User ID
      .then(dbUser => {
        // console.log(dbUser.data)
        setUser(dbUser.data);
        setPassword("");

    // Load myRecipes
        history.push("/myRecipes");

      })
    })
    .catch(err => {throw err})
  }

  return (
    <div>
      <MainBody>
        <FormMain>
        <h2>Login</h2>

          <div className="form-div col-md-6 col-sm-12">
            <form className="form user-form" onSubmit={handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="text" id="email" className="form-control"
                    value={email}
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="password"
                    value={password}
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </FormMain>
      </MainBody>
    </div>
  )
}
export default Login;
