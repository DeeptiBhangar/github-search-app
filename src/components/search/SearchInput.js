import React, { useState } from "react";
import Button from "../button/Button";
import "./SearchInput.scss";

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search-container">
      <input
        type="search"
        name="searchText"
        value={searchText}
        className="search-container__search-input"
        onChange={(event) => setSearchText(event.target.value)}
      />
      <Button onClick={() => onSearch(searchText)} color="primary" text="Search Repositories" />
    </div>
  );
};

export default SearchInput;
