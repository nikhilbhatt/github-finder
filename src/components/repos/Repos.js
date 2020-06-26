import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";
const Repos = ({ repos }) => {
  return (
    <React.Fragment>
      <h2>
        <strong>Latest Repositories:-</strong>
      </h2>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </React.Fragment>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
