import React from "react";

function Search({ handleSearchBy }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearchBy} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
