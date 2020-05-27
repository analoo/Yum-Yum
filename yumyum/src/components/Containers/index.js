import React from "react";
import "./containers.css"


function MainDiv(props) {
    return (
        <div className="container main-div">
            {props.children}
        </div>
    )
}

export default MainDiv;