import React from "react";

function MainBody(props) {
    return (
        <div className="main-border">
            <div className="main">
            {props.children}

            </div>
        </div>
    )
}

export default MainBody;