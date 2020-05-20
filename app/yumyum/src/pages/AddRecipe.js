import React, { useState } from "react";
import API from "../utils/API.js"
import AddIngredient from "../components/Form/Add-Ingredient";
import AddSteps from "../components/Form/Add-Steps";

function AddRecipe() {

    const [getRecipe, setRecipe] = useState({})
    // const [ogRecipeID, setOgRecipeID] = useState("");
    // const [rating, setRating] = useState("")

    // const [recipeName, setRecipeName] = useState("");
    // const [recipeDesc, setRecipeDesc] = useState("");
    // const [servingSize, setServingSize] = useState("");
    // const [totalTime, setTotalTime] = useState("")
    // const [activeTime, setActiveTime] = useState("");
    // const [ingredients, setIngredients] = useState([]);
    // const [directions, setDirections] = useState([]);
    // const [tag, setTag] = useState([])
    // const [photo, setPhoto] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        let newRecipe = getRecipe;

        console.log(newRecipe)
        API.postRecipe(newRecipe)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })

        setRecipe({});

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Recipe Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={getRecipe.name}
                        name="recipeName"
                        onChange={e => setRecipe({ ...getRecipe, name: e.target.value })}
                        placeholder="Recipe Name" />
                </ div>

                <div className="form-group">
                    <label >Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        value={getRecipe.description}
                        name="recipeDesc"
                        onChange={e => setRecipe({ ...getRecipe, decsription: e.target.value })}
                        placeholder="Recipe Description"></textarea>
                </div>

                <div className="form-group">
                    <label >Serving Size</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={getRecipe.servingSize}
                        name="servingSize"
                        onChange={e => setRecipe({ ...getRecipe, servingSize: e.target.value })}
                        placeholder="Serving Size" />
                </ div>

                <div className="form-group">
                    <label >Total Time</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={getRecipe.totalTime}
                        name="totalTime"
                        onChange={e => setRecipe({ ...getRecipe, totalTime: e.target.value })}
                        placeholder="Total Time" />
                </ div>

                <div className="form-group">
                    <label>Active Time</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={getRecipe.activeTime}
                        name="activeTime"
                        onChange={e => setRecipe({ ...getRecipe, activeTime: e.target.value })}
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
                        value={getRecipe.tags}
                        name="tag"
                        onChange={e => setRecipe({ ...getRecipe, tags: e.target.value })}
                        placeholder="Add a Tag" />
                </div>


                <div className="form-group">
                    <label >Image</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={getRecipe.photo}
                        name="photo"
                        onChange={e => setRecipe({ ...getRecipe, ingredients: e.target.value })}
                        placeholder="Add a Photo of your Recipe" />
                </div>
                <button type="submit" className="btn btn-primary">Add Recipe</button>

            </form>

        </div>)

}

export default AddRecipe;