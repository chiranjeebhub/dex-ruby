import React from "react";
import NavBarAccounts from "../components/NavBarAccounts";

const TwoFactorAuth = () => {
  return (
    <>
      <NavBarAccounts />
      <div className="container center-pass-block">
        <h4 className="changepass-heading">Get your Google Auth code</h4>
        <img
          src={require("../img/qr.png")}
          width="300px"
          height="300px"
          style={{ textAlign: "center" }}
        />
        <form action="">
          <input
            class="form-control form-control-lg input-style"
            type="password"
            placeholder="Enter Old Password"
          />
          <br />
          <input
            class="form-control form-control-lg input-style"
            type="password"
            placeholder="Enter New Password"
          />
          <br />
          <input
            class="form-control form-control-lg input-style"
            type="password"
            placeholder="Confirm New Password"
          />
          <br />
          <button
            type="submit"
            class="btn btn-lg btn-block"
            style={{
              backgroundColor: "#186ab4",
              color: "white"
            }}
          >
            CHANGE
          </button>
        </form>
      </div>
    </>
  );
};

export default TwoFactorAuth;
