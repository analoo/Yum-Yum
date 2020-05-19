import React, { useState } from "react";
import { UserContext } from "../components/UserProvider";
import { auth } from "../utils/firebase";
import MainBody from "../components/mainBody";
import FormMain from "../components/formMain";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const handleSubmit = event => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password);
  }

  return (
    <div>
      <MainBody>
        <FormMain>
          <div className="form-div col-md-6 col-sm-12">
            <h2>Login</h2>

            <form className="form" onSubmit={handleSubmit}>
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
