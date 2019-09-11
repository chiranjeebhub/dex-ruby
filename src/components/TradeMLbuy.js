import React, { useState } from "react";

const TradeMLbuy = () => {
  const [rangeBuy, setRangeBuy] = useState(0);

  return (
    <>
      <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#market"
            role="tab"
            aria-controls="market"
            aria-selected="true"
          >
            Market
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#limit"
            role="tab"
            aria-controls="limit"
            aria-selected="false"
          >
            Limit
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane show active"
          id="market"
          role="tabpanel"
          aria-labelledby="market-tab"
          style={{ padding: "10px" }}
        >
          <p style={{ padding: "0px 5px", fontWeight: "bold" }}>
            Buy BAT <span style={{ float: "right" }}>0.00000000 BTC</span>
          </p>
          <form>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="0.00"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  Amount BAT
                </span>
              </div>
            </div>

            <div class="form-group">
              <div className="row">
                <div className="col-9">
                  <input
                    name="buyrange"
                    type="range"
                    class="custom-range"
                    min="0"
                    max="100"
                    step="1"
                    id="customRange3"
                    value={rangeBuy}
                    onChange={e => setRangeBuy(e.target.value)}
                  />
                </div>
                <div className="col-3">
                  <span class="range-slider__value">{rangeBuy}</span>
                </div>
              </div>
            </div>
            <button className="btn btn-success btn-block">Buy BAT</button>
          </form>
        </div>

        <div
          class="tab-pane fade show"
          id="limit"
          role="tabpanel"
          aria-labelledby="limit-tab"
          style={{ padding: "10px" }}
        >
          <p style={{ padding: "0px 5px", fontWeight: "bold" }}>
            Buy BAT <span style={{ float: "right" }}>0.00000000 BTC</span>
          </p>
          <form>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="0.00"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  Price BTC
                </span>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="0.00"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  Amount BAT
                </span>
              </div>
            </div>

            <div class="form-group">
              <div className="row">
                <div className="col-9">
                  <input
                    name="buyrange"
                    type="range"
                    class="custom-range"
                    min="0"
                    max="100"
                    step="1"
                    id="customRange3"
                    value={rangeBuy}
                    onChange={e => setRangeBuy(e.target.value)}
                  />
                </div>
                <div className="col-3">
                  <span class="range-slider__value">{rangeBuy}</span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="0.00"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  Total BTC
                </span>
              </div>
            </div>
            <button className="btn btn-success btn-block">Buy BAT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TradeMLbuy;
