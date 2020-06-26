//Converting class component to functional component using state hooks:-
import React, { useState } from "react";
import propTypes from "prop-types";

const Search = ({ showClear, clearUser, setAlert, searchUsers }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Enter Some value before searching", "light");
    } else {
      searchUsers(text);
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
      {showClear && (
        <button className='btn btn-block btn-light' onClick={clearUser}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: propTypes.func.isRequired,
  clearUser: propTypes.func.isRequired,
  showClear: propTypes.bool.isRequired,
  setAlert: propTypes.func.isRequired,
};

export default Search;
