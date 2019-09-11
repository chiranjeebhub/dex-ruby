import React from "react";
import NavLogin from "../components/NavLogin";

import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <NavLogin />
      <div className="container center-pass-block">
        <h4 className="changepass-heading">
          Login To Your Favorite Cryptocurrency Exchange!
        </h4>
        <form action="">
          <input
            class="form-control form-control-lg input-style"
            type="email"
            placeholder="Enter your email"
          />
          <br />
          <input
            class="form-control form-control-lg input-style"
            type="password"
            placeholder="Enter your password"
          />
          <br />
          <div className="row">
            <div className="col">
              <Link to="/signup">
                {" "}
                <button
                  type="submit"
                  class="btn btn-lg btn-block btn-outline"
                  style={{
                    color: "#186ab4",
                    borderColor: "#186ab4",
                    borderWidth: "2px"
                  }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="col">
              <Link to="/profile">
                <button
                  type="submit"
                  class="btn btn-lg btn-block"
                  style={{
                    backgroundColor: "#186ab4",
                    color: "white"
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </form>
        <div style={{ paddingTop: "20px" }}>
          <p>
            <a href="#">Forgot your password?</a>
            <br />
            <a href="#">Didn't receive confirmation instructions?</a>
            <br />
            <a href="#">Locked Account?</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
