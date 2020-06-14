import React, { Component } from "react";
import propTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "Github finder",
    icon: "fab fa-github",
  };

  static propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
  };
  render() {
    return (
      <div className='nav navbar bg-primary'>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Navbar;
