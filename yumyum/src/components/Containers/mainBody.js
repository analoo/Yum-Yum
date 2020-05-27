import React from "react";
import "./containers.css"

function MainBody(props) {
    return (
        <div className="container main-body">
            {props.children}
        </div>
    )
}

export default MainBody;