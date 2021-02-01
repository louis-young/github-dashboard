import React, { useState, useContext } from "react";

import { Context } from "../../context/Context";

import "./Search.scss";

const Search = () => {
  const [value, setValue] = useState("");

  const { setUsername, loading } = useContext(Context);

  const searchUser = (event) => {
    event.preventDefault();

    setUsername(value);

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
      <button type="submit" className="search__submit button" disabled={loading}>
        Search
      </button>
    </form>
  );
};

export default Search;
