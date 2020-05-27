import React, { useState, useEffect } from "react";
import { useSessionContext } from "../../utils/GlobalState";
import {
    LOADING,
    SET_DIRECTIONS
} from "../../utils/actions";


function AddDirections() {
    const [state, dispatch] = useSessionContext();

    const [getDirections, setDirections] = useState([]);
    const [getStep, setStep] = useState();

    useEffect(() => {
        setDirections(state.currentDirections);
        setStep("");
    }, []);

    const updateDirections = (directions) => {
        dispatch({
            type: LOADING
        });
        dispatch({
            type: SET_DIRECTIONS,
            directions: directions
        });
    };

    const handleStepSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting new step");
        const directions = [...getDirections];
        updateDirections(directions);
        console.log(directions);
    }

    const handleStepChange = (event, i) => {

        event.preventDefault();
        let step = 
        directions[i] = event.target.value;

        setDirections(directions);

    }

    let directions = [...getDirections]

    return (
        <div>
            {directions.map((object, i) => (
                <div className="row" key={i + 1}>
                    <input type="text"  
                        className="form-control col-md-3"       
                        id="name"
                        value={object}
                        name="name"
                        placeholder="Add Step" 
                        onChange = {e => handleStepChange(e,i)} />
                    <button onClick={e => handleStepSubmit(e)}>+</button>
                </div>
            ))}
        </div>
    )

}

export default AddDirections;
