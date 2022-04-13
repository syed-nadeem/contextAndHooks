import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <button className="btn btn-secondary ntn-sm m-3">0</button>
          Navbar
        </a>
      </nav>
    );
  }
}

export default Navbar;
