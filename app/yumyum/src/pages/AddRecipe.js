import React, { useState } from "react";
import API from "../utils/API.js"
import AddIngredient from "../components/Form/Add-Ingredient";
import AddSteps from "../components/Form/Add-Steps";
import {useSessionContext} from "../utils/GlobalState";



function AddRecipe() {
    const [state,dispatch] = useSessionContext();

    const handleSubmit = event => {
        event.preventDefault();
        let newRecipe = state.currentRecipe;

        console.log(newRecipe)
        API.postRecipe(newRecipe)
            .then(result => {
                const ingredients = state.currentIngredients;
                for(let i=0; i<ingredients.length; i++){
                    
                    const ingredient = ingredients[i];
                    API.postIngredient({
                        ingredient: ingredient.ingredient
                    }).then(response => {
                        console.log(response);
                    }).catch(err => {
                        console.log(err);
                    })
                    
                    const recipeIngredient = {
                        amount: ingredient.amount,
                        measurement: ingredient.measurement,
                        IngredientIngredient: ingredient.ingredient,
                        RecipeId: newRecipe.id
                    }
                    API.postRecipeIngredient(recipeIngredient)
                    .then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    })
                }
                
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Recipe Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        // value={getRecipe.name}
                        name="recipeName"
                        // onChange={e => setRecipe({ ...getRecipe, name: e.target.value })}
                        placeholder="Recipe Name" />
                </ div>

                <div className="form-group">
                    <label >Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        // value={getRecipe.description}
                        name="recipeDesc"
                        // onChange={e => setRecipe({ ...getRecipe, decsription: e.target.value })}
                        placeholder="Recipe Description"></textarea>
                </div>

                <div className="form-group">
                    <label >Serving Size</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        // value={getRecipe.servingSize}
                        name="servingSize"
                        // onChange={e => setRecipe({ ...getRecipe, servingSize: e.target.value })}
                        placeholder="Serving Size" />
                </ div>

                <div className="form-group">
                    <label >Total Time</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        // value={getRecipe.totalTime}
                        name="totalTime"
                        // onChange={e => setRecipe({ ...getRecipe, totalTime: e.target.value })}
                        placeholder="Total Time" />
                </ div>

                <div className="form-group">
                    <label>Active Time</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        // value={getRecipe.activeTime}
                        name="activeTime"
                        // onChange={e => setRecipe({ ...getRecipe, activeTime: e.target.value })}
                        placeholder="Active Time" />
                </ div>

                {/* For now, this is just a text field. Needs to be made an ingredients component */}
                <div className="form-group" id="ingredientList">
                    <label>Add Ingredients</label>
                    <AddIngredient />
                    <button>+</button>
                </div>

                {/* for now, this is a simple field but will need to be its own component */}
                <div className="form-group">
                    <label >Directions</label>
                    <AddSteps />

                    
                </div>

                {/* For now, this is just a text field. Needs to be made tags component */}
                <div className="form-group">
                    <label >Tags</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        // value={getRecipe.tags}
                        name="tag"
                        // onChange={e => setRecipe({ ...getRecipe, tags: e.target.value })}
                        placeholder="Add a Tag" />
                </div>


                <div className="form-group">
                    <label >Image</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        // value={getRecipe.photo}
                        name="photo"
                        // onChange={e => setRecipe({ ...getRecipe, ingredients: e.target.value })}
                        placeholder="Add a Photo of your Recipe" />
                </div>
                <button type="submit" className="btn btn-primary">Add Recipe</button>

            </form>

        </div>)

}

export default AddRecipe;