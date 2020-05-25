import React, { useContext, useState, useEffect } from "react";
import API from "../utils/API.js"
import MainBody from "../components/Containers/mainBody";
import Card from "../components/Card/";
import CardContainer from "../components/Card/CardContainer";
import CardRow from "../components/Card/CardRow"
import SearchBar from "../components/Search/Search-Bar"
import { useSessionContext } from "../utils/GlobalState";
import { UserContext } from "../components/UserProvider";
import { auth } from "../utils/firebase";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();

  //Firebase User
  const fbuser = useContext(UserContext);
  console.log(fbuser);

  // GlobalState
  const [state, dispatch] = useSessionContext();
  const [user, setUser] = useState({});

  const setCurrentUser = ({ id, email, username, name }, loadRecipes) => {
    // console.log(`SetCurrentUser ID:${id}`)
    const CurrentUser = user;
    CurrentUser.id = id;
    CurrentUser.email = email;
    CurrentUser.username = username;
    CurrentUser.name = name;

    // console.log(CurrentUser);
    setUser(CurrentUser);
    loadRecipes();
  };

  const getUser = (loadRecipes) => {
    if (fbuser === "null") { history.push("/login");}
    API.getUserByEmail(fbuser.email)
        .then(dbUser => {
          setCurrentUser(dbUser.data, loadRecipes);
        })
  };


  //Localstate
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  function loadRecipes () {

    console.log(`Getting User: ${user.id} Favorite Recipes`);
  
    API.getAllRecipes(user.id).then(res => {
      console.log(res); 
      setRecipes(res.data)
    }).catch(err => console.log(err))

    }

  useEffect( () => {
    getUser(loadRecipes);
  }, [])

  return (
    <div>
      <MainBody >
        <SearchBar placeholder="Search for your recipes" setSearch={setSearch} />
        <CardContainer><CardRow>

        {recipes.map(recipe => (
          <Card recipe={recipe} key={recipe.id} />
        ))}

        </CardRow>
        </CardContainer>
      </MainBody>
    </div>
  );
}
  

export default Search;
