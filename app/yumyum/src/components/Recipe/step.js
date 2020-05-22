import React from "react";

function Step(props) {
    return (
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        {/* <h5 className="modal-title" id="exampleModalLongTitle">Step </h5> */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    {props.val}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={props.countDown}>Previous</button>
                        <button type="button" className="btn btn-primary" onClick={props.countUp}>Next</button>
                    </div>
                </div>
            </div>
)
}

export default Step;