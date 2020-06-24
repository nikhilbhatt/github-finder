//Converting class component to functional component using state hooks:-
import React, { useState, useContext } from "react";
import propTypes from "prop-types";
import GithubContext from "../context/github/GithubContext";
import Users from "./Users";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Enter Some value before searching", "light");
    } else {
      githubContext.search(text);
      setText("");
    }
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-block btn-light'
          onClick={githubContext.clear}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: propTypes.func.isRequired,
};

export default Search;
