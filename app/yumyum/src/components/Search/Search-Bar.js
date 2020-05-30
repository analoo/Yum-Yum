import React from "react";
import "./search.css"

function SearchBar(props) {
    return (
        <div className="container search-div col-md-9 col-sm-12">
            <form className="form-inline" onSubmit={e => props.titleSearch()}>
                <div className="form-group mb-8 col-md-10 col-sm-12">
                    <input type="search" className="form-control search mb-8 col-md-10" placeholder={props.placeholder}
                        name="search"
                        onChange={e => props.setSearch(e.target.value)}
                    />
                    <button type="submit" className="mb-3 btn-primary search-button">Search</button>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="title"/>
                        <label className="form-check-label" >
                            title
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="ingredient" />
                        <label className="form-check-label">
                            ingredient
                        </label>
                    </div>
                </div>

            </form>

        </div >
    )
}


export default SearchBar;

