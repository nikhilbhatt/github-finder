import React, { Component } from "react";
import propTypes from "prop-types";

class User extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.login);
  }
  render() {
    return <div>{this.props.user}</div>;
  }
}

export default User;
