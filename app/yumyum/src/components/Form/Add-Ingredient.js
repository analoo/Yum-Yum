import React, { useState, useEffect } from "react";
import { useSessionContext } from "../../utils/GlobalState";
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
    REMOVE_FAVORITE,
    ADD_CURRENT_INGREDIENT
} from "../../utils/actions";

function AddIngredient() {
    const [state, dispatch] = useSessionContext();

    const [getIngredients, setIngredients] = useState([]);

    useEffect(() => {
        setIngredients(state.currentIngredients);
    }, []);

    const ingredients = getIngredients;

    const handleInputChange = function(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    const handleIngSubmit = function(event) {
        event.preventDefault();
        console.log("Submitting ingredient");
    }
        return (
            <div>
            {ingredients.map(object => (
            <div className="row" key={object.id}>
                <input type="text" className="form-control col-md-3" id="exampleFormControlInput1"
                    value={object.name}
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Ingredients Name" />
                <input type="text" className="form-control col-md-3" id="exampleFormControlInput1"
                    value={object.amount}
                    name="amount"
                    onChange={handleInputChange}
                    placeholder="Quantity" />
                <input type="text" className="form-control col-md-3" id="exampleFormControlInput1"
                    value={object.measurement}
                    name="measurement"
                    onChange={handleInputChange}
                    placeholder="Measurement" />
                    {/* This button should add the current ingredient being typed to the ingredients array */}
                <button onClick={handleIngSubmit}>+</button>
            </div>
            ))}
            </div>
        )

}

export default AddIngredient;