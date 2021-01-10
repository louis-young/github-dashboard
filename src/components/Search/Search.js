import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");

  const searchUser = (event) => {
    event.preventDefault();

    //setUsername(value);

    setValue("");
  };

  return (
    <form onSubmit={searchUser} className="search">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter GitHub username"
        autoFocus
        required
        className="search__input"
      />
      <button type="submit" className="search__submit button">
        Search
      </button>
    </form>
  );
};

export default Search;
