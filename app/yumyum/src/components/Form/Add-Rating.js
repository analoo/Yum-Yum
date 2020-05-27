import React from "react";


function AddRating() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log("tried to submit")
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="banner"> Give us your feedback!</div>
                <div className="form-group" onChange={e => console.log(e.target.value)}>
                    <h5 className="form-label">How satisfied are you with the recipe instructions?</h5>

                    <div className="container" style={{ textAlign: "center" }}>
                        <div className="row">
                            <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="1" />
                                <p className="form-check-label">Very Dissatisfied</p>
                            </div>
                            <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="2" />
                                <p className="form-check-label">Dissatisfied</p>
                            </div>
                            <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="3" />
                                <p className="form-check-label">Neutral</p>
                            </div>
                            <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="4" />
                                <p className="form-check-label">Satisfied</p>
                            </div>
                            <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="5" />
                                <p className="form-check-label">Very Satisfied</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group" onChange={e => console.log(e.target.value)}>
                    <h5 className="form-label">How would you rate the taste of the recipe?</h5>

                    <div className="container" style={{ textAlign: "center" }}>
                        <div className="row">
                            <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="1" />
                                <p className="form-check-label">Terrible</p>
                            </div>
                            <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="2" />
                                <p className="form-check-label">Bad</p>
                            </div>
                            <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="3" />
                                <p className="form-check-label">Okay</p>
                            </div>
                            <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="4" />
                                <p className="form-check-label">Good</p>
                            </div>
                            <div className="col-md-2 col-sm-10 form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="5" />
                                <p className="form-check-label">YumYum</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <h5 className="form-label">Comments</h5>
                    <textarea className="form-control" rows="3"
                        name="Comments"
                        onChange={e => console.log(e.target.value)}
                        placeholder="Feedback on the recipe" ></textarea>
                </ div>
                <button type="submit" className="btn btn-primary">Add Feedback</button>
            </form>

        </div>
    )
}

export default AddRating;