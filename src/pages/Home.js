import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import NavHome from "../components/NavHome";

const Home = () => {
  return (
    <div className="home-background">
      <div className="container">
        <NavHome />
        <div className="row">
          <div className="col-sm-5 center-block">
            <h1 className="title">
              The World's First
              <br /> Exchange OS
            </h1>
            <br />
            <p className="sub-title">
              GXTrade is the world's leading routing engine for the exchange of
              digital assets. Access GXTrade and so much more by getting started
              with Global X Change.
            </p>
            {/* 
            <form class="form-inline">
              <Link to="/profile">
                <button type="button" class="btn btn-lg btn-light">
                  SIGN UP
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/profile">
                <button type="button" class="btn btn-lg btn-outline-light">
                  LOGIN
                </button>
              </Link>
            </form> */}
            <Link to="/signup" class="btn btn-lg btn-light btn-block">
              SIGN UP
            </Link>
          </div>
          <div className="col-sm-7 title-image">
            <img src={require("../img/bitcoin.png")} width="70%" />
          </div>
        </div>
        {/* <ul class="nav mynav">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};
export default Home;
