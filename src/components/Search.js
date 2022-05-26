import React from "react";
import search from "../assets/search.svg";

import "../styles/search.css";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <input
        className="search-input"
        onChange={(e) => handleSearchNote(e.target.value)}
        placeholder="Type to search..."
      />
      <button className="search-icons">
        <img className="icon" src={search} alt="search" />
      </button>
    </div>
  );
};

export default Search;
