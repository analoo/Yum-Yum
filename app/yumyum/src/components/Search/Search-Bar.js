import React from "react";
import "./search.css"

function SearchBar(props) {
    return (
        <div className="container search-div col-md-9 col-sm-12">
            <form className="form-inline">
                <div className="form-group mb-8 col-md-12 col-sm-12">
                    <input type="search" className="form-control search mb-8 col-md-10" placeholder={props.placeholder}
                        name="search"
                        onChange={e => props.setSearch(e.target.value)}
                    />
                    <button type="submit" className="mb-3 btn-primary search-button">Search</button>
                </div>
                
            </form>

        </div>
    )
}


export default SearchBar;

