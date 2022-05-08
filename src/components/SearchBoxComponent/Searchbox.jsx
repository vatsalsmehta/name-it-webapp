import React from "react";
import { render } from "react-dom";
import './Searchbox.css'

const SearchBox = () => {
    return (
        <div className="Searchbox-container">
            <input className="Searchbox-input" placeholder="Enter Your Keywords"></input>

        </div>
    );
}


export default SearchBox;