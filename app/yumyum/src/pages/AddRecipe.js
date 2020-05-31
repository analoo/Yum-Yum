import React, { useState, useEffect } from "react";
import { storage } from "../utils/firebase";
import API from "../utils/API.js"
import AddIngredient from "../components/Form/Add-Ingredient";
import AddDirections from "../components/Form/Add-Steps";
import AddTags from "../components/Form/Add-Tags";
import { useSessionContext } from "../utils/GlobalState";
import MainBody from "../components/Containers/mainBody.js";
import { useHistory } from "react-router-dom";

function AddRecipe() {
    // used to reroute the page without causing a refresh
    const history = useHistory();

    const [state, dispatch] = useSessionContext();
    const [getRecipe, setRecipe] = useState({});
    const [loaded, setLoaded] = useState();

    const loadRecipeCheck = {
        recipeComplete: false,
        userRecipeComplete: false,
        ingredientComplete: false,
        recipeIngredientComplete:false,
        tagComplete:false,
        recipeTagComplete:false
    };

    useEffect(() => {
        setRecipe({ ...state.currentRecipe });
        setLoaded(true);
    }, []);

    // used for image upload
    var file;

    async function fileUpload() {
        setLoaded(false);
        // create a reference to the file we selected through input
        var storageRef = storage.ref("images/" + file.name)
        // adds the file to firebase and returns a status
        storageRef.put(file).then((snapshot) => {
            // with the response location, we can get the download URL
            storage.ref(snapshot.ref.location.path).getDownloadURL().then(function (url) {
                // we set the value of the URL response as the value of the image
                setRecipe({ ...getRecipe, photo: url })
                setLoaded(true);
            }).catch(err => console.log(err));
        })

    }

    const editRecipe = () => {
        let directions = state.currentDirections;
        let directionsString = "";
        let image;

        for (var i = 0; i < directions.length; i++) {
            directionsString += directions[i] + "\n\n";
        }

        // checks whether a new photo is loaded, it not, keeps the original image path
        if (getRecipe.photo) {
            image = getRecipe.photo
        }
        else {
            image = state.currentRecipe.photo
        }

        const updateRecipe = {
            id: getRecipe.id,
            name: getRecipe.name,
            servingSize: getRecipe.servingSize,
            activeTime: getRecipe.activeTime,
            totalTime: getRecipe.totalTime,
            directions: directionsString,
            photo: image,
            ingredients: state.currentIngredients,
            tags: state.currentTags,
            source: state.user.username,
            UserId: state.user.id
        }

        API.updateRecipe(updateRecipe)
            .then(res1 => {
                console.log("recipe update");
                let recipeId = getRecipe.id;
                // no user recipe call needed since the relationship exists
                const ingredients = updateRecipe.ingredients;
                console.log(ingredients);

                //delete recipeIngredient and recipe Tag relationships and then creates new ones
                API.removeAllRecipeIngredient(recipeId).then(res => {
                    console.log(res)
                    for (let i = 0; i < ingredients.length; i++) {
                        const ingredient = ingredients[i];
                        API.postIngredient({
                            name: ingredient.name.toLowerCase()
                        }).then(res3 => {
                            // console.log(res3);
                        }).catch(err => {
                            // console.log(err);
                        })

                        const recipeIngredient = {
                            amount: ingredient.amount,
                            measurement: ingredient.measurement,
                            IngredientName: ingredient.name.toLowerCase(),
                            RecipeId: recipeId
                        }

                        API.postRecipeIngredient(recipeIngredient)
                            .then(res4 => {
                                console.log(res4);
                            }).catch(err => {
                                console.log(err);
                            })
                    }

                    loadRecipeCheck.recipeIngredientComplete = true;
                    loadRecipeCheck.ingredientComplete = true;

                    if (loadRecipeCheck.recipeComplete && loadRecipeCheck.userRecipeComplete && loadRecipeCheck.ingredientComplete && loadRecipeCheck.recipeIngredientComplete && loadRecipeCheck.tagComplete && loadRecipeCheck.recipeTagComplete) {
                        history.push('/myRecipes');
                    }

                }

                )

                // removes all recipe tags and creates new tags and relationships
                API.removeAllRecipeTag(recipeId).then(
                    res => {
                        const tags = updateRecipe.tags
                        for (let i = 0; i < tags.length; i++) {
                            const newTag = {
                                tag: tags[i].toLowerCase()
                            };

                            API.postTag(newTag)
                                .then(res5 => {
                                    console.log(res5);
                                }).catch(err => {
                                    console.log(err);
                                });

                            const recipeTag = {
                                category: "",
                                RecipeId: recipeId,
                                TagTag: tags[i].toLowerCase()
                            }

                            API.postRecipeTag(recipeTag)
                                .then(res6 => {
                                    console.log(res6);
                                }).catch(err => {
                                    console.log(err);
                                });
                        }

                        loadRecipeCheck.tagComplete = true;
                        loadRecipeCheck.recipeTagComplete = true;

                        if (loadRecipeCheck.recipeComplete && loadRecipeCheck.userRecipeComplete && loadRecipeCheck.ingredientComplete && loadRecipeCheck.recipeIngredientComplete && loadRecipeCheck.tagComplete && loadRecipeCheck.recipeTagComplete) {
                            history.push('/myRecipes');
                        }

                    }
                )
            })
            .catch(err => {
                console.log(err)
            })
        
        loadRecipeCheck.recipeComplete = true;
        loadRecipeCheck.userRecipeComplete = true;

        if (loadRecipeCheck.recipeComplete && loadRecipeCheck.userRecipeComplete && loadRecipeCheck.ingredientComplete && loadRecipeCheck.recipeIngredientComplete && loadRecipeCheck.tagComplete && loadRecipeCheck.recipeTagComplete) {
            history.push('/myRecipes');
        }

    };

    // -------------

    const handleSubmit = event => {
        event.preventDefault();
        if (state.currentRecipe.userOwner) {
            editRecipe()
        }
        else {
            let directions = state.currentDirections;
            let directionsString = "";

            for (var i = 0; i < directions.length; i++) {
                directionsString += directions[i] + "\n\n";
            }

            const newRecipe = {
                name: getRecipe.name,
                servingSize: getRecipe.servingSize,
                activeTime: getRecipe.activeTime,
                totalTime: getRecipe.totalTime,
                directions: directionsString,
                photo: getRecipe.photo,
                ingredients: state.currentIngredients,
                tags: state.currentTags,
                source: state.user.username,
                UserId: state.user.id
            }

            console.log("New Recipe", newRecipe)
            API.postRecipe(
                newRecipe
            )
                .then(res1 => {
                    console.log("recipe submitted!");
                    console.log(res1);
                    let recipeId = res1.data;
                    const ingredients = newRecipe.ingredients;
                    console.log(ingredients);

                    const newUserRecipe = {
                        UserId: state.user.id,
                        RecipeId: recipeId,
                        userRecipeKey: state.user.id + "-" + recipeId,
                        edited: true,
                        favorite: false,
                    }
                    console.log(newUserRecipe)

                    API.postUserRecipe(
                        newUserRecipe
                    ).then(res2 => {
                        console.log(res2);
                    }).catch(err => {
                        console.log(err);
                    });

                    for (let i = 0; i < ingredients.length; i++) {
                        console.log("submitting ingredient" + i);
                        const ingredient = ingredients[i];
                        API.postIngredient({
                            name: ingredient.name.toLowerCase()
                        }).then(res3 => {
                            console.log(res3);
                        }).catch(err => {
                            console.log(err);
                        })

                        const recipeIngredient = {
                            amount: ingredient.amount,
                            measurement: ingredient.measurement,
                            IngredientName: ingredient.name.toLowerCase(),
                            RecipeId: recipeId
                        }
                        API.postRecipeIngredient(recipeIngredient)
                            .then(res4 => {
                                console.log(res4);
                            }).catch(err => {
                                console.log(err);
                            })
                    }

                    loadRecipeCheck.recipeIngredientComplete = true;
                    loadRecipeCheck.ingredientComplete = true;

                    if (loadRecipeCheck.recipeComplete && loadRecipeCheck.userRecipeComplete && loadRecipeCheck.ingredientComplete && loadRecipeCheck.recipeIngredientComplete && loadRecipeCheck.tagComplete && loadRecipeCheck.recipeTagComplete) {
                        history.push('/myRecipes');
                    }

                    const tags = newRecipe.tags

                    for (let i = 0; i < tags.length; i++) {

                        const newTag = {
                            tag: tags[i].toLowerCase()
                        };

                        API.postTag(newTag)
                            .then(res4 => {
                                console.log(res4);
                            }).catch(err => {
                                console.log(err);
                            });

                        const recipeTag = {
                            category: "",
                            RecipeId: recipeId,
                            TagTag: tags[i].toLowerCase()
                        }

                        API.postRecipeTag(recipeTag)
                            .then(res6 => {
                                console.log(res6);
                            }).catch(err => {
                                console.log(err);
                            });
                    }

                    loadRecipeCheck.tagComplete = true;
                    loadRecipeCheck.recipeTagComplete = true;

                    if (loadRecipeCheck.recipeComplete && loadRecipeCheck.userRecipeComplete && loadRecipeCheck.ingredientComplete && loadRecipeCheck.recipeIngredientComplete && loadRecipeCheck.tagComplete && loadRecipeCheck.recipeTagComplete) {
                        history.push('/myRecipes');
                    }

                    console.log(res1)
                })
                .catch(err => {
                    console.log(err)
                })

            loadRecipeCheck.recipeComplete = true;
            loadRecipeCheck.userRecipeComplete = true;

            if (loadRecipeCheck.recipeComplete && loadRecipeCheck.userRecipeComplete && loadRecipeCheck.ingredientComplete && loadRecipeCheck.recipeIngredientComplete && loadRecipeCheck.tagComplete && loadRecipeCheck.recipeTagComplete) {
                history.push('/myRecipes');
            }

        }

    };

    return (
        <div>
            <MainBody>
                {state.currentRecipe.userOwner ? <div className="banner">Edit Your Recipe: {state.currentRecipe.name}</div> :
                    <div className="banner">Add A New Recipe </div>}
                <div className="form-division">

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Recipe Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                defaultValue={getRecipe.name}
                                name="recipeName"
                                onChange={e => setRecipe({ ...getRecipe, name: e.target.value })}
                                placeholder="Recipe Name" />
                        </ div>

                        <div className="form-group">
                            <label >Serving Size</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                defaultValue={getRecipe.servingSize}
                                name="servingSize"
                                onChange={e => setRecipe({ ...getRecipe, servingSize: e.target.value })}
                                placeholder="Serving Size" />
                        </ div>

                        <div className="form-group">
                            <label >Total Time</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                defaultValue={getRecipe.totalTime}
                                name="totalTime"
                                onChange={e => setRecipe({ ...getRecipe, totalTime: e.target.value })}
                                placeholder="Total Time" />
                        </ div>

                        <div className="form-group">
                            <label>Active Time</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                defaultValue={getRecipe.activeTime}
                                name="activeTime"
                                onChange={e => setRecipe({ ...getRecipe, activeTime: e.target.value })}
                                placeholder="Active Time" />
                        </ div>

                        <hr />

                        <div className="form-group col-md-12">
                            <label>Add Ingredients</label>
                            <AddIngredient />
                        </div>

                        <hr />

                        <div className="form-group col-md-12">
                            <label> Add Directions</label>
                            <AddDirections />
                        </div>

                        <hr />

                        <div className="form-group col-md-12">
                            <label >Tags</label>
                            <AddTags />
                        </div>

                        <hr />

                        <div className="form-group col-md-12">
                            <label >Image</label>
                            <div className="row">
                                <input type="file" className="form-control-file  col-md-12" id="file-upload"
                                    name="photo"
                                    onChange={e => file = e.target.files[0]}
                                    placeholder="Add a Photo of your Recipe" />
                            </div>
                            {loaded ?
                                <button onClick={() => fileUpload()} type="button" id="file-button" className="uploadButton form-btn-add">Upload</button> :
                                <button onClick={() => setLoaded(true)} type="button" className="uploadButton form-btn-add">Cancel Upload</button>
                            }
                        </div>
                        {state.currentRecipe.userOwner ? loaded ?
                            <button type="submit" className="btn btn-primary">Save Updates</button> :
                            <p>Waiting for image to upload..</p> :
                            loaded ?
                                <button type="submit" className="btn btn-primary">Add Recipe</button> :
                                <p>Waiting for image to upload..</p>
                        }

                    </form>
                </div>
            </MainBody>

        </div>)

}

export default AddRecipe;
