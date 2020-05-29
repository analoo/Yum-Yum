import React, { useState } from "react";
import API from "../../utils/API"
import "./form.css"
import { useHistory } from "react-router-dom";



function AddRating(props) {
    const history = useHistory();


    const [getYumScore, setYumScore] = useState("")
    const [getRating, setRating] = useState("")
    const [getComment, setComment] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        API.getUserRecipe(1, props.recipeID)
            .then(response => {
                console.log(response)
                API.updateUserRecipe({
                    recipeScore: getRating,
                    yumScore: getYumScore,
                    comment: getComment,
                    userRecipeKey: `${props.userID}-${props.recipeID}`
                })
                    .then(res => {
                        console.log(res)
                        updateRecipeRating(getYumScore)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }

    function updateRecipeRating(score) {
        API.getSingleRecipe(props.recipeID)
            .then(response => {
                console.log(response)
                let ratingTotal = response.data.ratingTotal + Number(score)
                let ratingCount = response.data.ratingCount + 1
                let ratingAverage = parseFloat((ratingTotal / ratingCount).toFixed(2)) 
                let body = {
                recipeId: props.recipeID,
                ratingTotal: ratingTotal,
                ratingAverage: ratingAverage,
                ratingCount: ratingCount
            }
                API.updateRecipe(body)
                    .then(res => {console.log(res)
                        history.push("/search");
                    })
                    .catch(err => console.log(err))



            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="banner"> Give us your feedback!</div>
                <div className="form-group" onChange={e => setRating(e.target.value)}>
                    <h5 className="form-label">How satisfied are you with the recipe instructions?</h5>

                    <div className="container" style={{ textAlign: "center" }}>
                        <div className="row">
                            <fieldset id="group1">
                                <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="group1" id="gridRadios1" value="1" />
                                    <p className="form-check-label">Very Dissatisfied</p>
                                </div>
                                <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="group1" id="gridRadios1" value="2" />
                                    <p className="form-check-label">Dissatisfied</p>
                                </div>
                                <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="group1" id="gridRadios1" value="3" />
                                    <p className="form-check-label">Neutral</p>
                                </div>
                                <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="group1" id="gridRadios1" value="4" />
                                    <p className="form-check-label">Satisfied</p>
                                </div>
                                <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="group1" id="gridRadios1" value="5" />
                                    <p className="form-check-label">Very Satisfied</p>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div className="form-group" onChange={e => setYumScore(e.target.value)}>
                    <h5 className="form-label">How would you rate the taste of the recipe?</h5>

                    <div className="container" style={{ textAlign: "center" }}>
                        <div className="row">
                            <fieldset id="group2">

                                <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="1" />
                                    <p className="form-check-label">Terrible</p>
                                </div>
                                <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="2" />
                                    <p className="form-check-label">Bad</p>
                                </div>
                                <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="3" />
                                    <p className="form-check-label">Okay</p>
                                </div>
                                <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="4" />
                                    <p className="form-check-label">Good</p>
                                </div>
                                <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="5" />
                                    <p className="form-check-label">YumYum</p>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <h5 className="form-label">Comments</h5>
                    <textarea className="form-control" rows="3"
                        name="Comments"
                        onChange={e => setComment(e.target.value)}
                        placeholder="Feedback on the recipe" ></textarea>
                </ div>
                <button type="submit" className="btn btn-primary">Add Feedback</button>
            </form>

        </div>
    )
}

export default AddRating;