import React from "react";

const SearchCountries = (props) => {
  return (
    <input
      style={{ width: "100%", padding: "1rem", marginRight: "1rem" }}
      type="text"
      placeholder="search country.."
      autoFocus
      onChange={props.handleChange}
    />
  );
};

export default SearchCountries;
