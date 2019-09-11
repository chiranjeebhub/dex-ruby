import React from "react";
import NavLogin from "../components/NavLogin";

import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <NavLogin />
      <div className="container center-pass-block">
        <h4 className="changepass-heading">Let's create your account!</h4>
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
            placeholder="Enter your password (6 characters minimum)"
          />
          <br />
          <input
            class="form-control form-control-lg input-style"
            type="password"
            placeholder="Confirm your password"
          />
          <br />
          <div className="row">
            <div className="col">
              <button
                type="submit"
                class="btn btn-lg btn-block"
                style={{
                  backgroundColor: "#186ab4",
                  color: "white"
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </form>
        <div style={{ paddingTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#186ab4" }}>
            Already signed up? &nbsp;&nbsp;
            <Link to="/signin">
              <button
                type="submit"
                class="btn btn-outline"
                style={{
                  color: "#186ab4",
                  borderColor: "#186ab4",
                  borderWidth: "1px"
                }}
              >
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
