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
    ADD_CURRENT_INGREDIENT,
    ADD_STEP
} from "../../utils/actions";


function AddSteps() {
    const [state, dispatch] = useSessionContext();

    const [getStep, setStep] = useState([]);

    useEffect(() => {
        setStep("");
    }, []);

    const handleInputChange = function(event) {
        event.preventDefault();
        setStep(event.target.value);
    }

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

    console.log(directions);

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
