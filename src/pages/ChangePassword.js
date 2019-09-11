import React from "react";
import NavBarAccounts from "../components/NavBarAccounts";

const ChangePassword = () => {
  return (
    <>
      <NavBarAccounts />
      <div className="container center-pass-block">
        <h4 className="changepass-heading">Change Password</h4>
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

export default ChangePassword;
