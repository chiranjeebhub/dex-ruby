import React from "react";

const TradeMarket = () => {
  return (
    <div class="card shadow-sm" style={{ height: "360px" }}>
      <div class="card-body" style={{ paddingTop: "0px" }}>
        <div
          className="row"
          style={{
            position: "sticky",
            top: "0",
            background: "white",
            padding: "10px 0px"
          }}
        >
          <div
            className="col-4"
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center"
            }}
          >
            <h6>Market</h6>
          </div>
          <div className="col-8">
            <form>
              <div class="form-group" style={{ marginBottom: "0px" }}>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>BAT</option>
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>GXT</option>
                  <option>OMG</option>
                  <option>XMR</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        {/* <hr style={{ marginTop: "10px" }} /> */}

        <table class="table table-fixed">
          <thead>
            <tr>
              <th scope="col">All</th>
              <th scope="col">Price</th>
              <th scope="col">24h %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BAT/BTC</td>
              <td>0.00</td>
              <td>+0.00%</td>
            </tr>
            <tr>
              <td>BAT/BTC</td>
              <td>0.00</td>
              <td>+0.00%</td>
            </tr>
            <tr>
              <td>BAT/BTC</td>
              <td>0.00</td>
              <td>+0.00%</td>
            </tr>
            <tr>
              <td>BAT/BTC</td>
              <td>0.00</td>
              <td>+0.00%</td>
            </tr>
            <tr>
              <td>BAT/BTC</td>
              <td>0.00</td>
              <td>+0.00%</td>
            </tr>
            <tr>
              <td>BAT/BTC</td>
              <td>0.00</td>
              <td>+0.00%</td>
            </tr>
            <tr>
              <td>BAT/BTC</td>
              <td>0.00</td>
              <td>+0.00%</td>
            </tr>
            <tr>
              <td>BAT/BTC</td>
              <td>0.00</td>
              <td>+0.00%</td>
            </tr>
            <tr>
              <td>BAT/BTC</td>
              <td>0.00</td>
              <td>+0.00%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeMarket;
