import React from "react";
import "./recipe.css"
import { OLElement, LIElement, ULElement } from "./listElem" 
import { useSessionContext } from "../../utils/GlobalState";


function RecipeMain() {
    const [state,dispatch] = useSessionContext();

    let ingredients = state.currentIngredients
    let steps = state.currentRecipe.directions.split("/")
    let tags = state.currentTags;

    return (
        <div className="container recipe-container">
            <h3>{state.currentRecipe.name}</h3>
            <div className="row">
                <div className="col-md-4">
                    <img className="detail-img" src={state.currentRecipe.photo} />
                    {tags.map(el => (
                        <p className="tag" key={el.tag}>{el.tag}</p>
                    ))}
                </div>
                <div className="col-md-8">
                    <p className="rec-label">Description</p>
                    <p className="description">{state.currentRecipe.description}</p>
                    <p className="rec-label">Ingredients</p>
                    <ULElement>
                        {ingredients.map(ingredient => (
                            <LIElement val={ingredient.ingredient&" "&ingredient.amount&" "&ingredient.measurement} key={ingredient.ingredient}/>
                        ))}
                    </ULElement>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12"><label>Instructions</label></div>
                <ULElement>
                    {steps.map(step => ( 
                    <LIElement val={step} key={step.split(".")[0]}/>
                        ))}
                    </ULElement>
            </div>
            <button className="btn-primary">Start</button>

            </div>
            
    )
}

export default RecipeMain;


