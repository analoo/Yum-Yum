import React from "react";
import "./card.css"
import { Link } from "react-router-dom";


function Card(props) {

    let recipe = props.recipe
    return (
        <div className="col-md-4 col-sm-12 recipe-div">

            <div className="card">
                <Link to={"/recipes/" + recipe.id}>
                    {/* <button class ="like" id={`like-${recipe.id}`}>❤️</button> */}
                    <div className="card-body" style={{ backgroundImage: "url(" + recipe.photo + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center", height:"325px" , backgroundSize: "cover"}}>
                    <div className="card-title"><h5 className="card-title" style={{color: "white", verticalAlign:"bottom"}}>{recipe.name}</h5></div>
                </div>
                </Link>
                
            </div>
            {/* <p className="card-text recipe-desc">{recipe.description}</p> */}
           
        </div>
    )
}

export default Card;