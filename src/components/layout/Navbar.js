import React from "react";
import propTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <div className='nav navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};

export default Navbar;
