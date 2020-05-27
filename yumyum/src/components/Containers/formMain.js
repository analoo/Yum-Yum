import React from "react";
import "./containers.css"


function FormMain(props) {
    return (
        <div className = "form-main">
            {props.children}
        </div>
    )
}

export default FormMain;