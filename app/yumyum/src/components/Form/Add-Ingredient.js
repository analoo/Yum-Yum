import React, { useState, useEffect, useRef } from "react";
import { useSessionContext } from "../../utils/GlobalState";
import {
    LOADING,
    ADD_CURRENT_INGREDIENT
} from "../../utils/actions";

function AddIngredient() {

    
    const [state, dispatch] = useSessionContext();

    const [getIngredients, setIngredients] = useState([]);
    const [getName, setName] = useState();
    const [getAmount, setAmount] = useState();
    const [getMeasurement, setMeasurement] = useState();

    useEffect(() => {
        setIngredients(state.currentIngredients);
        console.log(state.currentIngredients);
        setName ("");
        setAmount ("");
        setMeasurement ("");
    }, []);

    const ingredients = [...getIngredients];

    const updateIngredients = (newIngredient) => {
        console.log("adding a new ingredient");
        console.log(newIngredient);
        dispatch({
            type: LOADING
          });
        dispatch({
          type: ADD_CURRENT_INGREDIENT,
          ingredient: newIngredient
        });
      };

    const handleIngSubmit = function(event) {
        event.preventDefault();
        console.log("Submitting ingredient");
        let newIngredient = {name: getName, amount: getAmount, measurement: getMeasurement}
        let ingredients = [...getIngredients];
        ingredients.push(newIngredient);
        setIngredients(ingredients);
        updateIngredients(newIngredient)
        setName("");
        setAmount("");
        setMeasurement("");
        console.log(state.currentIngredients);
    }

    const updateIngredient = (event, i) => {

        const {name,value} = event.target;

        let ingredients = [...getIngredients];

        ingredients[i][name]=value;
        
        setIngredients(ingredients);
    }

    console.log(ingredients);

        return (
            <div>
            {ingredients.map((object,i) => (
            <div className="row" key={i}>
                <input type="text" className="form-control col-md-3" key={`name` + (i)}
                    value={object.name}
                    name="name"
                    onChange = {e => updateIngredient(e, i)}
                    placeholder="Ingredients Name" />
                <input type="text" className="form-control col-md-3" id={`amount` + (i)}
                    value={object.amount}
                    name="amount"
                    onChange = {e => updateIngredient(e, i)}
                    placeholder="Quantity" />
                <input type="text" className="form-control col-md-3" id={`measurement` + (i)}
                    value={object.measurement}
                    name="measurement"
                    onChange = {e => updateIngredient(e, i)}
                    placeholder="Measurement" />
                    {/* This button should add the current ingredient being typed to the ingredients array */}
                    <button onClick={handleIngSubmit}>+</button>
            </div>
            ))}
            
            </div>
        )

}

export default AddIngredient;