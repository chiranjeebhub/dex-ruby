import React, { useState } from "react";

const Withdrawl = () => {
  const [selected, setSelected] = useState("");
  const showDetails = () => {
    if (selected !== "") {
      return (
        <>
          <div class="card shadow">
            <div class="card-body">
              <div
                className="row"
                style={{
                  color: "white",
                  fontSize: "15px",
                  textAlign: "center"
                }}
              >
                <div
                  className="col"
                  style={{
                    backgroundColor: "#186AB4",
                    margin: "5px",
                    padding: "5px",
                    borderRadius: "5px"
                  }}
                >
                  <p>Total Balance</p>
                  <hr style={{ borderColor: "white" }} />
                  <p>0.00000000 ADA</p>
                </div>
                <div
                  className="col"
                  style={{
                    backgroundColor: "#186AB4",
                    margin: "5px",
                    padding: "5px",
                    borderRadius: "5px"
                  }}
                >
                  <p>In Order</p>
                  <hr style={{ borderColor: "white" }} />
                  <p>0.00000000 ADA</p>
                </div>
                <div
                  className="col"
                  style={{
                    backgroundColor: "#186AB4",
                    margin: "5px",
                    padding: "5px",
                    borderRadius: "5px"
                  }}
                >
                  <p>Available Balance</p>
                  <hr style={{ borderColor: "white" }} />
                  <p>0.00000000 ADA</p>
                </div>
              </div>
              <div className="row" style={{ padding: "20px" }}>
                <h6>Note</h6>
                <p>
                  Send only ADA to this deposit address. Sending any other coin
                  or token to this address may result in the loss of your
                  deposit.
                </p>
                <h6>ADA Deposit Address</h6>
                <p
                  style={{
                    padding: "10px",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderRadius: "5px",
                    borderColor: "#186AB4",
                    textAlign: "justify"
                  }}
                >
                  lfl;asvjpjpkpoKPDJX;AKDnclnlKANLCKNLKAnlln
                  aCjhjchjhJSHZchohohhsHHSHHCVOJahjhxJhdhaIN XJSa[ouxbjasohsDNXo
                </p>
                {/* put buttons here */}
                <p style={{ textAlign: "center" }}>
                  <button type="button" class="btn btn-primary">
                    <i class="fas fa-qrcode" /> Show QR Code
                  </button>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <button type="button" class="btn btn-outline-primary">
                    <i class="fas fa-copy" /> Copy Address
                  </button>
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }
    // } else {
    //   return (
    //     <div style={{ height: "320px" }}>
    //       <p>&nbsp;</p>
    //     </div>
    //   );
    // }
  };
  return (
    <>
      <div className="row">
        <div className="col">
          <div
            className="card shadow"
            style={{
              backgroundColor: "#186AB4"
              //   height: "420px"
            }}
          >
            <div class="card-body">
              <form>
                <div class="form-group">
                  <select
                    class="form-control selectpicker shadow"
                    id="exampleFormControlSelect1"
                    data-live-search="true"
                    value={selected}
                    onChange={e => setSelected(e.target.value)}
                  >
                    <option>Select coin/token to Deposit</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </form>
              {/* only when selected show this */}
              {showDetails()}
            </div>
          </div>
        </div>
        <div className="col">
          <div
            class="card shadow"
            style={{ height: "90vh", backgroundColor: "#186AB4" }}
          >
            <div class="card-body">
              <div className="row" style={{ color: "white" }}>
                <div className="col-sm-5" style={{ textAlign: "left" }}>
                  History
                </div>
                <div className="col-sm-7" style={{ textAlign: "right" }}>
                  Deposit did not arrive
                  <span
                    title=" If your deposit does not arrive for a long time, It may be
                    caused by congested block chain or incomplete transaction."
                  >
                    &nbsp;
                    <i class="fas fa-question-circle" />
                    &nbsp;
                  </span>
                  &nbsp;| &nbsp; View All
                </div>
              </div>
              <hr style={{ borderColor: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawl;
