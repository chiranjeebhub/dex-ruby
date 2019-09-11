import React from "react";

const TradeHistory = () => {
  return (
    <>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#E8EAF6"
        }}
      >
        <span style={{ fontSize: "18px", fontWeight: "500" }}>
          Trade History
        </span>
        <span style={{ float: "right" }}>
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Decimals
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </span>
      </div>
      <table class="table table-striped">
        <tbody>
          <tr>
            <td>000321</td>
            <td>0.2</td>
            <td>18:35:32</td>
          </tr>
          <tr>
            <td>000321</td>
            <td>0.2</td>
            <td>18:35:32</td>
          </tr>
          <tr>
            <td>000321</td>
            <td>0.2</td>
            <td>18:35:32</td>
          </tr>
          <tr>
            <td>000321</td>
            <td>0.2</td>
            <td>18:35:32</td>
          </tr>
          <tr>
            <td>000321</td>
            <td>0.2</td>
            <td>18:35:32</td>
          </tr>
          <tr>
            <td>000321</td>
            <td>0.2</td>
            <td>18:35:32</td>
          </tr>
          <tr>
            <td>000321</td>
            <td>0.2</td>
            <td>18:35:32</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TradeHistory;
