import React from "react";

function SearchBar(props) {
    return (
        <div className="container">
            <div className="input-group col-md-9 col-sm-9">
                    <input type="search" className="form-control search" placeholder={props.placeholder}
                        name="search"
                        onChange={e => props.setSearch(e.target.value)}
                    />
                 
                {/* div for autofill MVP + */}
                {/* <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                </div> */}
            </div>
        </div>
    )
}


export default SearchBar;

