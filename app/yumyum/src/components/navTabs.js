import React from "react";
import { Link, useLocation } from "react-router-dom";


function NavTabs() {
  const location = useLocation();

  return (
    <div className= "header">
      <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4">Yum&Yum</h1>
      </div>
      <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={location.pathname === "/search" ? "nav-link active" : "nav-link"}
          >
            Search
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/myRecipes"
            className={location.pathname === "/myRecipes" ? "nav-link active" : "nav-link"}
          >
            My Recipes
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/profile"
            className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}
          >
            Profile
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
