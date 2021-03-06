//Actions like search user goes Here
import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

const GithubState = (props) => {
  const initialstate = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    notFound: false,
  };

  let githubclientid, githubclientsecret;
  if (process.env.NODE_ENV !== "production") {
    githubclientid = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubclientsecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    githubclientid = process.env.GITHUB_CLIENT_ID;
    githubclientsecret = process.env.GITHUB_CLIENT_SECRET;
  }
  const [state, dispatch] = useReducer(GithubReducer, initialstate);

  //Search user
  const search = async (text) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubclientid}&
    client_secret=${githubclientsecret}`);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //Get user
  const getProfile = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubclientid}&
    client_secret=${githubclientsecret}`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //Get Repos
  const getRepos = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubclientid}&
    client_secret=${githubclientsecret}`);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //Clear user
  const clear = () => dispatch({ type: CLEAR_USERS });

  //Set Loading

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        length: state.length,
        notFound: state.notFound,
        search,
        clear,
        getProfile,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
