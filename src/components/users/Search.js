//Converting class component to functional component using state hooks:-
import React, { useState, useContext, useEffect } from "react";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Enter Some value before searching", "light");
    } else {
      await githubContext.search(text);
      setText("");
    }
  };
  useEffect(() => {
    if (githubContext.users.length === 0 && githubContext.notFound === true) {
      alertContext.setAlert("No user Found Try Again!!", "danger");
    }
  }, [githubContext.notFound, githubContext.users]);
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
export default Search;
