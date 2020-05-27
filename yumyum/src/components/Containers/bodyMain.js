import React from "react";
import "./containers.css"


function BodyMain(props) {
    return (
        <div className = "body-main">
            {props.children}
        </div>
    )
}

export default BodyMain;