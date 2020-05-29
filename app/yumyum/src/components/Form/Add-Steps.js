import React, { useState, useEffect } from "react";
import { useSessionContext } from "../../utils/GlobalState";
import {
    LOADING,
    SET_DIRECTIONS
} from "../../utils/actions";
import "./form.css"


function AddDirections() {
    const [state, dispatch] = useSessionContext();

    const [getDirections, setDirections] = useState([]);

    useEffect(() => {
        setDirections([...state.currentDirections, ""]);
    }, []);

    const updateDirections = (directions) => {

        const editedDirections = directions.filter(step => step.length > 0);

        dispatch({
            type: LOADING
        });
        dispatch({
            type: SET_DIRECTIONS,
            directions: editedDirections
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
        <div className="form-group" className="col-md-12">
        <label >Directions</label>
            {directions.map((object, i) => (
                <div className="row" key={i + 1}>
                    <input type="text"
                        className="form-control col-md-11 col-sm-10"
                        id="name"
                        value={object}
                        name="name"
                        placeholder="Add Step"
                        onChange={e => handleStepChange(e, i)} />
                    <button className="form-btn-add" onClick={e => handleStepSubmit(e)}>Add</button>
                </div>

            ))}

        </div>
    )

}

export default AddDirections;
