import React from "react";
import { Link } from "react-router-dom";

const NavHome = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{ paddingTop: "20px" }}>
      <Link to="/" className="navbar-brand">
        <img src={require("../img/logo.png")} width="150px" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNavDropdown" class="navbar-collapse collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">&nbsp;</li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/signin">
              <button type="button" class="btn btn-outline-light">
                <i class="fas fa-key" /> LOGIN
              </button>
            </Link>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li class="nav-item">
            <Link to="/profile">
              <button type="button" class="btn btn-outline-light">
                <i class="fas fa-user" /> PROFILE
              </button>
            </Link>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="{{ url('/register') }}">
              Register
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavHome;
