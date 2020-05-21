import React from "react";
import "./search.css"

function SearchBar(props) {
    return (
        <div className="container search-div col-md-9 col-sm-12">
            <form className="form-inline">
                <div className="form-group mb-2">
                    <input type="search" className="form-control search" placeholder={props.placeholder}
                        name="search"
                        onChange={e => props.setSearch(e.target.value)}
                    />
                </div>
                <button type="submit" className="mb-2 btn-primary search-button">Search</button>
            </form>

        </div>
    )
}


export default SearchBar;

