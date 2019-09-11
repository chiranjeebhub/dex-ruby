import React from "react";

const TradeSellOrder = () => {
  return (
    <>
      <span style={{ fontSize: "18px", fontWeight: "500" }}>Sell Order</span>
      <span style={{ float: "right" }}>
        Groups &nbsp;
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
    </>
  );
};

export default TradeSellOrder;
