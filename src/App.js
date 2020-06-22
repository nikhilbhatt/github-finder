import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";

const App = () => {
  // useState=
  const [users, setUsersState] = useState([]);
  const [user, setUserState] = useState({});
  const [repos, setReposState] = useState([]);
  const [loading, setLoadingState] = useState(false);
  const [alert, setAlertState] = useState(null);

  const search = async (text) => {
    setLoadingState(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsersState(res.data.items);
    setLoadingState(false);
  };

  const clear = () => {
    setUsersState([]);
    setLoadingState(false);
  };

  const setAlert = (msg, type) => {
    setAlertState({ msg, type });
    setTimeout(() => setAlertState(null), 5000);
  };

  const getProfile = async (username) => {
    setLoadingState(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUserState(res.data);
    setLoadingState(false);
  };

  const getRepos = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setReposState(res.data);
  };
  // const { users, user, repos, loading } = this.state;
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={search}
                    clearUser={clear}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              render={(props) => (
                <User
                  {...props}
                  getProfile={getProfile}
                  getRepos={getRepos}
                  loading={loading}
                  user={user}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
