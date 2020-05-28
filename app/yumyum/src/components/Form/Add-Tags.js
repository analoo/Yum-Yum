import React, { useState, useEffect } from "react";
import { useSessionContext } from "../../utils/GlobalState";
import {
    LOADING,
    SET_TAGS
} from "../../utils/actions";
import "./form.css"


function AddTags() {
    const [state, dispatch] = useSessionContext();

    const [getTags, setTags] = useState([]);

    useEffect(() => {
        setTags([...state.currentTags]);
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

    const handleTagSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting new Tag");
        let tags = [...getTags];
        tags.push("");
        setTags(tags);
        updateTags(tags);
        console.log(state.currentTags);
    }

    const handleTagChange = (event, i) => {

        event.preventDefault();
        let tags = getTags;
        tags[i] = event.target.value;

        setTags(tags);
        updateTags(tags);
        console.log(state.currentTags)
    }

    let tags = [...getTags];

    return (
        <div>
            {tags.map((object, i) => (
                <div className="row" key={i + 1}>
                    <input type="text" 
                        className="form-control col-md-3" 
                        id="name"
                        value={object}
                        name="name"
                        placeholder="New Tag"
                        onChange = {e => handleTagChange(e,i)}
                        />
                    
                </div>
            ))}
            <button onClick ={e => handleTagSubmit(e)}>Add New Tag</button>
        </div>
    )

}

export default AddTags;