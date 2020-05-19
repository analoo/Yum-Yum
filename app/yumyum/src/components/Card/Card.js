import React from "react";
import "./card.css"

function Card(props) {
    let recipe = props.recipe
    return (
        <div className="card">
            <img className="card-img-top" src={recipe.image} alt="Image of Recipe" />
            <div className="card-body">
                <p className="card-text recipe-desc">{recipe.description}</p>
                <a href={recipe.link} class="btn btn-primary">See Recipe</a>
            </div>
            <h5 className="card-title">{recipe.name}</h5>
        </div>
    )
}

export default Card;