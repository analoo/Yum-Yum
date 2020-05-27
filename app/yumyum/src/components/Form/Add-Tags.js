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
    ADD_STEP,
    SET_TAGS
} from "../../utils/actions";


function AddTags() {
    const [state, dispatch] = useSessionContext();

    const [getTag, setTag] = useState([]);

    useEffect(() => {
        setTag("");
    }, []);

    const updateTags = (tags) => {
        dispatch({
            type: LOADING
          });
        dispatch({
          type: SET_TAGS,
          tags: tags
        });
      };

    const handleTagSubmit = function(event) {
        event.preventDefault();
        console.log("Submitting new Tag");
        const tags = getTag;
        
        updateTags(tags);
        setTag("");
        console.log(state);
    }
    
    let tags = state.currentTags


        return (
            <div>
            {tags.map((object, i) => (
            <div className="row" key={i+1}>
                <input type="text" className="form-control col-md-3" id="name"
                    defaultValue={object}
                    name="name"
                    placeholder="Tag" />

                    {/* This button should edit the current step */}
                <button>+</button>
            </div>
            ))}
            <div className="row">
                <input type="text" className="form-control col-md-3" id="name"
                    name="name"
                    onChange={e => setTag(e.target.value)}
                    placeholder="New Tag" />
                <button onClick={handleTagSubmit}>+</button>
            </div>
            </div>
        )

}

export default AddTags;