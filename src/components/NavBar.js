import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { MyContext } from "../Context";

const NavBar = () => {
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
            <li class="nav-item">
              <NavLink to="/trade" className="nav-link">
                <img src={require("../img/trade-trans.svg")} width="20px" />
                &nbsp;&nbsp;Trade
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/funds" className="nav-link">
                <img src={require("../img/funds-trans.svg")} width="20px" />
                &nbsp;&nbsp;Funds
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/history" className="nav-link">
                <img src={require("../img/history-trans.svg")} width="20px" />
                &nbsp;&nbsp;History
              </NavLink>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                chiranjib.jena@gmail.com
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/profile" class="dropdown-item">
                  My Profile
                </Link>
                <a class="dropdown-item" href="#">
                  Exit
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
