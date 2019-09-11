import React from "react";
import NavBarAccounts from "../components/NavBarAccounts";

const UploadDocs = () => {
  return (
    <>
      <NavBarAccounts />
      <div className="container center-pass-block">
        <h4 className="changepass-heading">Upload Document</h4>

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
                  class="fas fa-check-circle"
                  style={{ fontSize: "25px", color: "#186ab4" }}
                />
                <p style={{ margin: "0px", fontSize: "12px" }}>Phone</p>
              </div>
              <div className="col" style={{ textAlign: "right" }}>
                <i
                  class="fas fa-circle"
                  style={{ fontSize: "25px", color: "#186ab4" }}
                />
                <p style={{ margin: "0px", fontSize: "12px" }}>Document</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <form action="">
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input input-style"
              id="customFile"
            />
            <label class="custom-file-label" for="customFile">
              Choose file
            </label>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col">
              <select class="form-control form-control-lg input-style">
                <option>Passport</option>
                <option>Identity Card</option>
                <option>Driver License</option>
                <option>Utility Bill</option>
              </select>
            </div>
            <div class="col">
              <input
                type="date"
                class="form-control form-control-lg input-style"
                placeholder="Expiry Date"
              />
            </div>
          </div>
          <br />
          <input
            class="form-control form-control-lg input-style"
            type="text"
            placeholder="Document Number: AB123456"
          />
          <br />

          <br />
          <button
            type="submit"
            class="btn btn-lg btn-block"
            style={{
              backgroundColor: "#186ab4",
              color: "white"
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadDocs;
