import React from "react";
import "./recipe.css"
import { OLElement, LIElement, ULElement } from "./listElem" 


function RecipeMain() {

    let ingredients = ["apples", "carrots"];
    let steps = ["value1", "value"]
    return (
        <div className="container recipe-container">
            <h3>Raspberries In Ledge</h3>
            <div className="row">
                <div className="col-md-4">
                    <img className="detail-img" src="https://i.picsum.photos/id/102/420/440.jpg" />
                </div>
                <div className="col-md-8">
                    <p className="rec-label">Description</p>
                    <p className="description">This is a recipe that will blow your mind! THis is a recipe that will blow your mind! THis is a recipe that will blow your mind! THis is a recipe that will blow your mind!</p>
                    <p className="rec-label">Ingredients</p>
                    <ULElement>
                        {ingredients.map(ingredient => (
                            <LIElement val={ingredient}/>
                        ))}
                    </ULElement>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12"><label>Instructions</label></div>
                <OLElement>
                    {steps.map(step => (
                    <LIElement val={step}/>
                        ))}
                    </OLElement>
            </div>
            <button className="btn-primary">Start</button>

            </div>
            
    )
}

export default RecipeMain;


