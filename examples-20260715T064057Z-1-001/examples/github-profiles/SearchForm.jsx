import React from "react";

const SearchForm = ({ onSearch }) => {
  return (
    <form className="user-form" onSubmit={onSearch}>
      <input type="text" name="search" placeholder="Search a Github User" />
    </form>
  );
};

export default SearchForm;
