import React from "react";

function Card(recipe) {
    return (
        <div className="card">
            <img className="card-img-top" src={recipe.image} alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">{recipe.description}</p>
                <a href={recipe.link} class="btn btn-primary">See Recipe</a>
            </div>
            <h5 className="card-title">{recipe.name}</h5>
        </div>
    )
}

export default Card;