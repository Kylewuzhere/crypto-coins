import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <input
        className="rounded-end search-bar"
        type="text"
        placeholder="Search by coin in page"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
