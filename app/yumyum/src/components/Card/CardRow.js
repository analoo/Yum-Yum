import React from "react";
import "./card.css"


function CardRow(props) {
    return(
    <div className="row row-cols-3">
        {props.children}
    </div>)
}

export default CardRow;