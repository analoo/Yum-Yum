import React, { useState, useEffect } from "react";
import { storage } from "../utils/firebase";
import API from "../utils/API.js"
import AddIngredient from "../components/Form/Add-Ingredient";
import AddSteps from "../components/Form/Add-Steps";
import { useSessionContext } from "../utils/GlobalState";
import {
    GET_MYRECIPES,
    ADD_RECIPE,
    ADD_FAVORITE,
    LOADING,
    UPDATE_FAVORITE,
    UPDATE_RECIPES,
    REMOVE_RECIPE,
    SET_CURRENT_RECIPE,
    COPY_RECIPE,
    REMOVE_FAVORITE
} from "../utils/actions";
import MainBody from "../components/Containers/mainBody.js";



function AddRecipe() {
    const [state, dispatch] = useSessionContext();

    var file;
    var fileLocation;


    const [getRecipe, setRecipe] = useState({});

    useEffect(() => {
        setRecipe(state.currentRecipe);
    }, []);

    async function fileUpload() {
        console.log(file)
        var storageRef = storage.ref("images/" + file.name)
        storageRef.put(file).then((snapshot) => {
            storage.ref(snapshot.ref.location.path).getDownloadURL().then(function (url) {
                fileLocation = url
                setRecipe({ ...getRecipe, photo: url})
            }).catch(function (error) {
                console.log(error)
            });
        })

    }


    const handleSubmit = event => {
        event.preventDefault();
        let newRecipe = getRecipe;
        console.log(newRecipe)
        API.postRecipe({
            name: newRecipe.name,
            // description: newRecipe.description,
            photo: newRecipe.photo,
            // servingSize: newRecipe.servingSize,
            // activeTime: newRecipe.activeTime,
            // totalTime: newRecipe.totalTime,
            // directions: newRecipe.directions,
            // source: newRecipe.source,
        })
            .then(result => {
                const ingredients = newRecipe.ingredients;
                for (let i = 0; i < ingredients.length; i++) {

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

    let ingredients = state.currentIngredients;

    return (
        <div>
            <MainBody>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Recipe Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            // value={getRecipe.name}
                            name="recipeName"
                            onChange={e => setRecipe({ ...getRecipe, name: e.target.value })}
                            placeholder="Recipe Name" />
                    </ div>

                    <div className="form-group">
                        <label >Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            // value={getRecipe.description}
                            name="recipeDesc"
                            onChange={e => setRecipe({ ...getRecipe, decsription: e.target.value })}
                            placeholder="Recipe Description"></textarea>
                    </div>

                    <div className="form-group">
                        <label >Serving Size</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            // value={getRecipe.servingSize}
                            name="servingSize"
                            onChange={e => setRecipe({ ...getRecipe, servingSize: e.target.value })}
                            placeholder="Serving Size" />
                    </ div>

                    <div className="form-group">
                        <label >Total Time</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            // value={getRecipe.totalTime}
                            name="totalTime"
                            onChange={e => setRecipe({ ...getRecipe, totalTime: e.target.value })}
                            placeholder="Total Time" />
                    </ div>

                    <div className="form-group">
                        <label>Active Time</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            // value={getRecipe.activeTime}
                            name="activeTime"
                            onChange={e => setRecipe({ ...getRecipe, activeTime: e.target.value })}
                            placeholder="Active Time" />
                    </ div>

                    <div className="form-group" id="ingredientList">
                        <label>Add Ingredients</label>

                        <AddIngredient/>
                    </div>

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
                            onChange={e => setRecipe({ ...getRecipe, tags: e.target.value })}
                            placeholder="Add a Tag" />
                    </div>


                    <div className="form-group">
                        <label >Image</label>
                        <input type="file" className="form-control"
                            name="photo"
                            onChange={e => file = e.target.files[0]}
                            placeholder="Add a Photo of your Recipe" />
                        <a onClick={() => fileUpload()} value="upload" id="file-button">Upload</a>
                    </div>


                    <button type="submit" className="btn btn-primary">Add Recipe</button>

                </form>
            </MainBody>

        </div>)

}

export default AddRecipe;