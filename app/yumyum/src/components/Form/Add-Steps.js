import React, { useState, useEffect } from "react";
import { useSessionContext } from "../../utils/GlobalState";
import {
    LOADING,
    ADD_STEP
} from "../../utils/actions";


function AddSteps() {
    const [state, dispatch] = useSessionContext();

    const [getStep, setStep] = useState([]);

    useEffect(() => {
        setStep("");
    }, []);

    const updateDirections = (newStep) => {
        dispatch({
            type: LOADING
          });
        dispatch({
          type: ADD_STEP,
          step: newStep
        });
      };

    const handleStepSubmit = function(event) {
        event.preventDefault();
        console.log("Submitting new step");
        const newStep = getStep
        
        updateDirections(newStep);
        setStep("");
    }
    
    let directions = state.currentDirections

        return (
            <div>
            {directions.map((object, i) => (
            <div className="row" key={i+1}>
                <input type="text" className="form-control col-md-3" id="name"
                    defaultValue={object}
                    name="name"
                    placeholder="Ingredients Name" />

                    {/* This button should edit the current step */}
                <button>+</button>
            </div>
            ))}
            <div className="row">
                <input type="text" className="form-control col-md-3" id="name"
                    name="name"
                    onChange={e => setStep(e.target.value)}
                    placeholder="New Step" />
                    {/* This button should add the current Step being typed to the Steps array */}
                <button onClick={handleStepSubmit}>+</button>
            </div>
            </div>
        )

}

export default AddSteps;
