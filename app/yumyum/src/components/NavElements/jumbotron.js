import React from "react";
import "./navElements.css"

function Jumbotron(){
    return(
<div className="jumbotron jumbotron-fluid">
    <img className="logo" src="/first_logo.png" alt="logo"/>
    <h1 className="display-4" style={{ fontFamily: 'Pacifico', color: "#78909c", left: "21.2%", zposition: "2"}}>Yum&Yum</h1>
    <h1 className="display-4" style={{ fontFamily: 'Pacifico', color: "white", left: "21%", zposition: "3"}}>Yum&Yum</h1>
</div>
    )
}

export default Jumbotron;


