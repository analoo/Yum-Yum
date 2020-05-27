import React, { useState, useEffect, useRef } from "react";
import { useSessionContext } from "../../utils/GlobalState";
import {
    LOADING,
    SET_CURRENT_INGREDIENTS
} from "../../utils/actions";
import "./form.css"


function AddIngredient() {

    
    const [state, dispatch] = useSessionContext();

    const [getIngredients, setIngredients] = useState([]);

    useEffect(() => {
        setIngredients([...state.currentIngredients]);
    }, []);

    const ingredients = [...getIngredients];

    const updateIngredients = (ingredients) => {
        dispatch({
            type: LOADING
          });
        dispatch({
          type: SET_CURRENT_INGREDIENTS,
          ingredients: ingredients
        });
      };

    const handleIngSubmit = function(event) {
        event.preventDefault();
        console.log("adding Ingredient");
        let newIngredient = {name: "", amount: "", measurement: ""}
        let ingredients = [...getIngredients];
        ingredients.push(newIngredient);
        setIngredients(ingredients);
        updateIngredients(ingredients);
    }

    const handleIngChange = (event, i) => {

        const {name,value} = event.target;

        let ingredients = [...getIngredients];

        ingredients[i][name]=value;
        
        setIngredients(ingredients);
        updateIngredients(ingredients);
    }

        return (
            <div>
            {ingredients.map((object,i) => (
            <div className="row" key={i}>
                <input type="text" className="form-control col-md-3" key={`name` + (i)}
                    value={object.name}
                    name="name"
                    onChange = {e => handleIngChange(e, i)}
                    placeholder="Ingredients Name" />
                <input type="text" className="form-control col-md-3" id={`amount` + (i)}
                    value={object.amount}
                    name="amount"
                    onChange = {e => handleIngChange(e, i)}
                    placeholder="Quantity" />
                <input type="text" className="form-control col-md-3" id={`measurement` + (i)}
                    value={object.measurement}
                    name="measurement"
                    onChange = {e => handleIngChange(e, i)}
                    placeholder="Measurement" />
            </div>
            ))}
             <button onClick={handleIngSubmit}>Add New Ingredient</button>
            </div>
        )

}

export default AddIngredient;