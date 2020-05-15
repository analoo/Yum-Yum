import React, { Component, useState } from "react";


function AddRecipe() {
    const [recipeName, setRecipeName] = useState("");
    const [recipeDesc, setRecipeDesc] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [photo, setPhoto] = useState("");
    const [servingSize, setServingSize] = useState("");
    const [activeTime, setActiveTime] = useState("");
    const [totalTime, setTotalTime] = useState("")
    const [directions, setDirections] = useState([]);
    const [ogRecipeID, setOgRecipeID] = useState("");
    const [rating, setRating] = useState("")
    const [tag, setTag] = useState([])

    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Recipe Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        value={recipeName}
                        name="recipeName"
                        onChange={this.handleInputChange}
                        placeholder="Recipe Name" />
                </ div>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        value={recipeDesc}
                        name="recipeDesc"
                        onChange={this.handleInputChange}
                        placeholder="Recipe Description"></textarea>
                </div>


                {/* <div className="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div> */}

            </form>

        </div>)

}

export default AddRecipe;