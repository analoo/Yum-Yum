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


function AddTags() {
    const [state, dispatch] = useSessionContext();

    const [getTag, setTag] = useState([]);

    useEffect(() => {
        setTag("");
    }, []);

    const updateTags = (newTag) => {
        dispatch({
            type: LOADING
          });
        dispatch({
          type: ADD_TAG,
          tag: newTag
        });
      };

    const handleTagSubmit = function(event) {
        event.preventDefault();
        console.log("Submitting new Tag");
        const newTag = getTag;
        
        updateTags(newTag);
        setTag("");
    }
    
    let tags = state.currentTags


        return (
            <div>
            {tags.map((object, i) => (
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
                <button onClick={handleTagSubmit}>+</button>
            </div>
            </div>
        )

}

export default AddTags;