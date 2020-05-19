import React from "react";
import CardContainer from "./Card-Container"
import CardRow from "./Card-Row"
import "./card.css"

function Card(props) {
    let recipe = props.recipe
    return (

        <div className="col-md-4 recipe-div">
            <div className="card">
                {/* <button class ="like" id={`like-${recipe.id}`}>❤️</button> */}
                <div className="card-body" style={{ backgroundImage: "url(" + recipe.photo + ")" }}>
                </div>
            </div>
            <p className="card-text recipe-desc">{recipe.description}</p>
            <h5 className="card-title">{recipe.name}</h5>
        </div>

    )
}

export default Card;