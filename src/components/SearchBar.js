import React from "react";

const SearchBar = ({ setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name in page"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
