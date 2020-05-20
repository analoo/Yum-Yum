import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import MainDiv from "./components/Containers/index";
import NavTabs from "./components/navTabs";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MyRecipes from "./pages/MyRecipes";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddRecipe from "./pages/AddRecipe";
import Details from "./pages/Details";
import UserProvider from "./components/UserProvider";
import { SessionProvider } from "./utils/GlobalState";



function App() {

  return (
    <Router>
      <div>
        <SessionProvider>
        <UserProvider>
          <MainDiv>
            <NavTabs />
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/myRecipes" component={MyRecipes} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/add-recipe" component={AddRecipe} />
          </MainDiv>
        </UserProvider>
        </SessionProvider>
      </div>
    </Router>
  );
}

export default App;
