import React, { useState } from "react";
import API from "../utils/API"


function AddRecipe() {
    // not sure if this is the place to track it
    const [ogRecipeID, setOgRecipeID] = useState("");
    const [rating, setRating] = useState("")

    const [recipeName, setRecipeName] = useState("");
    const [recipeDesc, setRecipeDesc] = useState("");
    const [servingSize, setServingSize] = useState("");
    const [totalTime, setTotalTime] = useState("")
    const [activeTime, setActiveTime] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState([]);
    const [tag, setTag] = useState([])
    const [photo, setPhoto] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        let newRecipe = {
            name: recipeName,
            description: recipeDesc,
            photo: photo,
            servingSize: servingSize,
            activeTime: activeTime,
            totalTime: totalTime,
            directions: directions,
            rating: 3
        }

        console.log(newRecipe)
        API.postRecipe(newRecipe)
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
      
          setRecipeName("");
          setRecipeName("");
          setServingSize("");
          setTotalTime("");
          setActiveTime("");
          setIngredients([]);
          setDirections([]);
          setTag([]);
          setPhoto("")
          
      };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Recipe Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={recipeName}
                        name="recipeName"
                        onChange={e => setRecipeName(e.target.value)}
                        placeholder="Recipe Name" />
                </ div>

                <div className="form-group">
                    <label >Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        value={recipeDesc}
                        name="recipeDesc"
                        onChange={e => setRecipeDesc(e.target.value)}
                        placeholder="Recipe Description"></textarea>
                </div>

                <div className="form-group">
                    <label >Serving Size</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={servingSize}
                        name="servingSize"
                        onChange={e => setServingSize(e.target.value)}
                        placeholder="Serving Size" />
                </ div>

                <div className="form-group">
                    <label >Total Time</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={totalTime}
                        name="totalTime"
                        onChange={e => setTotalTime(e.target.value)}
                        placeholder="Total Time" />
                </ div>

                <div className="form-group">
                    <label>Active Time</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={activeTime}
                        name="activeTime"
                        onChange={e => setActiveTime(e.target.value)}
                        placeholder="Active Time" />
                </ div>

                {/* For now, this is just a text field. Needs to be made an ingredients component */}
                <div className="form-group">
                    <label>Ingredients</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={ingredients}
                        name="ingredients"
                        onChange={e => setIngredients(e.target.value)}
                        placeholder="Ingredients Name" />
                </div>

                {/* for now, this is a simple field but will need to be its own component */}
                <div className="form-group">
                    <label >Directions</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        value={directions}
                        name="directions"
                        onChange={e => setDirections(e.target.value)}
                        placeholder="Recipe Directions"></textarea>
                </div>

                {/* For now, this is just a text field. Needs to be made tags component */}
                <div className="form-group">
                    <label >Tags</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={tag}
                        name="tag"
                        onChange={e => setTag(e.target.value)}
                        placeholder="Add a Tag" />
                </div>


                <div className="form-group">
                    <label >Image</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={photo}
                        name="photo"
                        onChange={e => setPhoto(e.target.value)}
                        placeholder="Add a Photo of your Recipe" />
                </div>
                <button type="submit" className="btn btn-primary">Add Recipe</button>

            </form>

        </div>)

}

export default AddRecipe;