import React from "react";
import { useState } from "react";

const SearchBtn = ({ placeholder, value, onChange }) => {
  // const [searchQuery, setSearchQuery] = useState("");

  //     // create search function by targeting and matching the value: imnput
  //   const Search = (e) => {
  //     setSearchQuery(e.target.value);
  //   };

  return (
    <div>
      {/* search box contents */}
      <input
        className="search-input"
        placeholder={placeholder}
        type="text"
        name="search"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default SearchBtn;
