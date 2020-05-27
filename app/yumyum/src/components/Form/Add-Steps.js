import React, { useState, useEffect } from "react";
import { useSessionContext } from "../../utils/GlobalState";
import {
    LOADING,
    SET_DIRECTIONS
} from "../../utils/actions";


function AddDirections() {
    const [state, dispatch] = useSessionContext();

    const [getDirections, setDirections] = useState([]);

    useEffect(() => {
        setDirections([...state.currentDirections]);
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
        let directions = [...getDirections];
        directions.push("");
        setDirections(directions);
        updateDirections(directions);
        console.log(directions);
    }

    const handleStepChange = (event, i) => {

        event.preventDefault();
        let directions = getDirections;
        directions[i] = event.target.value;

        setDirections(directions);
        updateDirections(directions);

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
                </div>
            ))}
            <button onClick={e => handleStepSubmit(e)}>Add New Step</button>
        </div>
    )

}

export default AddDirections;
