import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../utils/firebase";
import MainBody from "../components/Containers/mainBody";
import FormMain from "../components/Containers/formMain";
import API from "../utils/API";
import { useSessionContext } from "../utils/GlobalState";
import { useHistory } from "react-router-dom";
import { SET_CURRENT_USER, ADD_FAVORITE, UPDATE_FAVORITE } from "../utils/actions";


const Login = () => {

  // brings in global state : we are storing, search, global user id, favorites, user generated
  const [state, dispatch] = useSessionContext();

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();

    // LOGIN to Firebase
    auth.signInWithEmailAndPassword(email, password)

      // User FireBase Response to get the email and get the ID from Yum&Yum DB
      .then(fbRes => {
        console.log(fbRes.data)
        let userEmail = fbRes.user.email;
        API.getUserByEmail(userEmail)

          // Get the ID from Yum&Yum DB Response and set global User ID
          .then(dbUser => {
            console.log(dbUser.data);
            setPassword("");

            const CurrentUser = {
              id: dbUser.data.id,
              email: dbUser.data.email,
              username: dbUser.data.username,
              name: dbUser.data.name
            }

            setUser(CurrentUser);

            dispatch({
              type: SET_CURRENT_USER,
              user: CurrentUser
            });

            API.getUserRecipes(CurrentUser.id)
              .then(dbUserRecipes => {
                // SETUP FAVORITE OBJECT TO LOAD TO GLOBAL STATE
                let userFav = { ...state.favorites };

                dbUserRecipes.data.map(userRecipe => {
                  userFav[userRecipe.RecipeId] = userRecipe.favorite;
                });
                // ADD FAVORITES to GLOBAL STATE
                dispatch({
                  type: ADD_FAVORITE,
                  favorites: userFav
                });

              })
              .catch(err => console.log(err));
              history.replace('/myRecipes');
          })
          .catch(err => console.log(err));
      })
      .catch(err => { alert(err) });

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
                    // value={email}
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="password"
                    // value={password}
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="password" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
          <div>
            <Link to={"/signup"}>
              <button type="button" style={{ backgroundColor: "white", opacity: "70%", color: "#ff6754", border: "none", fontWeight: "300", fontSize: "larger" }}>Take me to Signup</button>
            </Link>
          </div>
        </FormMain>
      </MainBody>
    </div>
  )
}
export default Login;
