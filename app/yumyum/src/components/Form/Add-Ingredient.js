import React, { useState, useEffect } from "react";
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

    const ingredients = getIngredients;

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
        const newIngredient = {name: getName, amount: getAmount, measurement: getMeasurement}
        setIngredients([...getIngredients, newIngredient] );
        updateIngredients(newIngredient)
        setName("");
        setAmount("");
        setMeasurement("");
        console.log(state.currentIngredients);
    }

    console.log(getAmount);

        return (
            <div>
            {ingredients.map((object,i) => (
            <div className="row" key={i}>
                <input type="text" className="form-control col-md-3" key={`name` + (i)}
                    defaultValue={object.name}
                    name="name"
                    // onChange = {e => setIngredients(...getIngredients, getIngredients[i].name: (e.target.value))}
                    placeholder="Ingredients Name" />
                <input type="text" className="form-control col-md-3" id={`amount` + (i)}
                    defaultValue={object.amount}
                    name="amount"
                    
                    placeholder="Quantity" />
                <input type="text" className="form-control col-md-3" id={`measurement` + (i)}
                    defaultValue={object.measurement}
                    name="measurement"
                    
                    placeholder="Measurement" />
                    {/* This button should add the current ingredient being typed to the ingredients array */}
                <button>+</button>
            </div>
            ))}
            <div className="row" id="input">
                <input type="text" className="form-control col-md-3" id="InputName"
                    defaultValue={getName}
                    name="name"
                    onChange={e => setName(e.target.value)}
                    placeholder="Ingredient Name" />
                <input type="text" className="form-control col-md-3" id="InputAmount"
                    defaultValue={getAmount}
                    name="amount"
                    onChange={e => setAmount(e.target.value)}
                    placeholder="Quantity" />
                <input type="text" className="form-control col-md-3" id="InputMeasurement"
                    defaultValue={getMeasurement}
                    name="measurement"
                    onChange={e => setMeasurement(e.target.value)}
                    placeholder="Measurement" />
                    {/* This button should add the current ingredient being typed to the ingredients array */}
                <button onClick={handleIngSubmit}>+</button>
            </div>
            </div>
        )

}

export default AddIngredient;