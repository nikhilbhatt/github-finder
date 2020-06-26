import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import Spinner from "../layout/Spinner";

const User = ({ user, loading, repos, getRepos, getProfile, match }) => {
  useEffect(() => {
    getProfile(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []); //if empty array is not used than it will run in infinite loop
  //use effect is used as alternative for componentDidMount() function of class

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='/' className='btn'>
          Back to Search
        </Link>
        hireable:{" "}
        {hireable ? (
          <i className='fas fa-check text-success'></i>
        ) : (
          <i className='fas fa-times-circle text-danger'></i>
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt='profile'
              className='round-img'
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio </h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn my-1 btn-dark'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: {login}</strong>
                  </Fragment>
                )}
              </li>

              <li>
                {company && (
                  <Fragment>
                    <strong>company: {company}</strong>
                  </Fragment>
                )}
              </li>

              <li>
                {blog && (
                  <Fragment>
                    <strong>
                      Website: <a href={blog}>{blog}</a>
                    </strong>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>followers: {followers}</div>
          <div className='badge badge-success'>following: {following}</div>
          <div className='badge badge-dark'>Repositories: {public_repos}</div>
          <div className='badge badge-lightr'>Gist: {public_gists}</div>
        </div>
        {/* call repos */}
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getProfile: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

export default User;