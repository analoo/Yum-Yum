import React from "react";
import "./navElements.css"
import { Link, useLocation } from "react-router-dom";
import { useSessionContext } from "../../utils/GlobalState";



function NavTabs() {
  const location = useLocation();
  const [state, dispatch] = useSessionContext();


  return (
    <div>
      {state.user.id ?
        <div className="header">
          <a className="navbar-brand" href="/">
            <img src="/yy-logo.svg" style={{ width: "100px", height: "100px", class: "d-inline-block align-bottom" }} alt="" /></a>
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
        </div> :
        <div className="header">
          <a className="navbar-brand" href="/">
            <img src="/yy-logo.svg" style={{ width: "100px", height: "100px", class: "d-inline-block align-bottom" }} alt="" /></a>
          <ul className="nav nav-tabs justify-content-end">
            <li className="nav-item">
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
      </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
              >
                Login
      </Link>
            </li>
          </ul>
        </div>
      }
    </div>
  );
}

export default NavTabs;
