import React, { useState, useEffect } from "react";
import { storage } from "../utils/firebase";
import API from "../utils/API.js"
import AddIngredient from "../components/Form/Add-Ingredient";
import AddDirections from "../components/Form/Add-Steps";
import AddTags from "../components/Form/Add-Tags";
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
                console.log("finished uploading");
            }).catch(function (error) {
                console.log(error)
            });
        })

    }


    const handleSubmit = event => {
        event.preventDefault();
        let directions = state.currentDirections;
        let directionsString = "";

        for(var i=0; i<directions.length; i++){
            directionsString += (i+1) + "." + directions[i] + "\n\n";
        }

        const newRecipe ={
            name: getRecipe.name,
            servingSize: getRecipe.servingSize,
            totalTime: getRecipe.totalTime,
            directions: directionsString,
            ingredients: state.currentIngredients,
            tags: state.currentTags
        }

        console.log(newRecipe)
        API.postRecipe(
            newRecipe
        )
            .then(result => {
                console.log("recipe submitted!");
                console.log(result);
                const ingredients = newRecipe.ingredients;
                console.log(ingredients);
                for (let i = 0; i < ingredients.length; i++) {
                    console.log("submitting ingredient" + i);
                    const ingredient = ingredients[i];
                    API.postIngredient({
                        name: ingredient.name
                    }).then(response => {
                        console.log(response);
                    }).catch(err => {
                        console.log(err);
                    })

                    const recipeId = result.data;

                    const recipeIngredient = {
                        amount: ingredient.amount,
                        measurement: ingredient.measurement,
                        IngredientName: ingredient.name,
                        RecipeId: recipeId
                    }
                    API.postRecipeIngredient(recipeIngredient)
                        .then(res => {
                            console.log(res);
                        }).catch(err => {
                            console.log(err);
                        })
                }

                const tags = newRecipe.tags

                for(let i=0; i<tags.length; i++){
                    
                    const newTag = tags[i];

                    API.postTag(newTag)
                    .then(res => {
                        const recipeTag={
                            category: newTag,
                            RecipeId: result.data,
                            TagId: res.data
                        }

                        console.log(recipeTag);
                    });
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
                            name="recipeName"
                            onChange={e => setRecipe({ ...getRecipe, name: e.target.value })}
                            placeholder="Recipe Name" />
                    </ div>

                    <div className="form-group">
                        <label >Serving Size</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            name="servingSize"
                            onChange={e => setRecipe({ ...getRecipe, servingSize: e.target.value })}
                            placeholder="Serving Size" />
                    </ div>

                    <div className="form-group">
                        <label >Total Time</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            name="totalTime"
                            onChange={e => setRecipe({ ...getRecipe, totalTime: e.target.value })}
                            placeholder="Total Time" />
                    </ div>

                    <div className="form-group">
                        <label>Active Time</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
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
                        <AddDirections />
                    </div>

                    <div className="form-group">
                        <label >Tags</label>
                        <AddTags />
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