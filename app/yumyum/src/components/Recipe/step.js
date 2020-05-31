import React, { useState, useEffect } from "react";
import "./recipe.css"

function Step(props) {

    const [getStyle, setStyle] = useState({})

    useEffect(() => {
        setStyle({
            display: "inline",
        })
    }, [])


    function handleStyleChange(e) {
        e.preventDefault();
        setStyle({ display: "none" })
        props.setStepCount("")
    }

    function finishSteps(){
        props.showRating();
        setStyle({ display: "none" })
    }

    return (
        <div className="step-modal" style={getStyle}>

            <div className="head-banner">
                <div className="row" >
                    <div className="col-md-11 col-sm-10">
                        Step {props.data + 1} / {props.length}
                    </div>
                    <div className="col-md-1 col-sm-2" style={{ textAlign: "right" }}>
                        <button style={{ background: "transparent", border: "none", color: "white" }} onClick={(e) => handleStyleChange(e)}>x</button>
                    </div>
                </div>
            </div>
            <div className="modal-body">
                <h1 className="recipe-text">{props.val}</h1>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={props.countDown}>Previous</button>
                {props.data === props.length - 1 ?
                    <button type="button" className="btn btn-primary" onClick={finishSteps}>Done</button> :
                    <button type="button" className="btn btn-primary" onClick={props.countUp}>Next</button>
                }

            </div>

        </div>
    )
}

export default Step;