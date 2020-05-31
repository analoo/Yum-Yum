import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import MainDiv from "./components/Containers/index";
import NavTabs from "./components/NavElements/navTabs";

import Home from "./pages/Home";
import Search from "./pages/Search";
import MyRecipes from "./pages/MyRecipes";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddRecipe from "./pages/AddRecipe";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch";
import { SessionProvider } from "./utils/GlobalState";
import seedsPage from "./pages/SeedsPage";



function App() {

  return (
    <Router>
      <div>
        <SessionProvider>
          <MainDiv>
            <NavTabs />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/myRecipes" component={MyRecipes} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/add-recipe" component={AddRecipe} />
            <Route exact path="/recipes/:id" component={Details} />
            <Route exact path="/seedsPage" component={seedsPage} />
            <Route component={NoMatch} />
            </Switch>
          </MainDiv>
        </SessionProvider>
      </div>
    </Router>
  );
}

export default App;
