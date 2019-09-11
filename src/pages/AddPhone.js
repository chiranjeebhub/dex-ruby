import React from "react";
import NavBarAccounts from "../components/NavBarAccounts";

const AddPhone = () => {
  return (
    <>
      <NavBarAccounts />
      <div className="container center-pass-block">
        <h4 className="changepass-heading">Let's Verify Your Phone Number!</h4>

        <div
          class="card shadow"
          style={{ textAlign: "center", paddingBottom: "-20px" }}
        >
          <div class="card-body">
            <hr style={{ margin: "15px 25px" }} />
            <div className="row" style={{ marginTop: "-30px" }}>
              <div className="col" style={{ textAlign: "left" }}>
                <i
                  class="fas fa-check-circle"
                  style={{ fontSize: "25px", color: "#186ab4" }}
                />
                <p style={{ margin: "0px", fontSize: "12px" }}>Email</p>
              </div>
              <div className="col">
                <i
                  class="fas fa-circle"
                  style={{ fontSize: "25px", color: "#186ab4" }}
                />
                <p style={{ margin: "0px", fontSize: "12px" }}>Phone</p>
              </div>
              <div className="col" style={{ textAlign: "right" }}>
                <i
                  class="far fa-circle"
                  style={{ fontSize: "25px", color: "gray" }}
                />
                <p style={{ margin: "0px", fontSize: "12px" }}>Document</p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <form action="">
          <div class="row">
            <div class="col-md-2">
              <input
                type="text"
                class="form-control form-control-lg input-style"
                placeholder="+1"
              />
            </div>
            <div class="col-md-6">
              <input
                type="tel"
                class="form-control form-control-lg input-style"
                placeholder="Your Phone Number"
              />
            </div>
            <div class="col-md-4">
              <button
                type="submit"
                class="btn btn-lg btn-block"
                style={{
                  backgroundColor: "#186ab4",
                  color: "white"
                }}
              >
                Send Code
              </button>
            </div>
          </div>
          <br />

          <input
            class="form-control form-control-lg input-style"
            type="text"
            placeholder="Enter Code"
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
            CONFIRM
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPhone;
