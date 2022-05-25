import React from "react";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <button className="search-icons" size="1.3em" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default Search;
