import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { MyContext } from "../Context";

const NavLogin = () => {
  const value = useContext(MyContext);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark  nav-style">
        <Link to="/" className="navbar-brand">
          <img src={require("../img/logo.png")} width="150px" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">&nbsp;</li>
            {/* <li class="nav-item">
              <NavLink to="/twofa" className="nav-link">
                Enable 2FA
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/upload_docs" className="nav-link">
                <i class="fas fa-file-upload" /> &nbsp;Upload Document
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/add_phone" className="nav-link">
                <i class="fas fa-phone-alt" /> &nbsp;Add Phone
              </NavLink>
            </li> */}
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <NavLink to="/signin" className="nav-link">
                <i class="fas fa-key" /> &nbsp;Login
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <NavLink to="/signup" className="nav-link">
                <i class="fas fa-user-plus" /> &nbsp;Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavLogin;
