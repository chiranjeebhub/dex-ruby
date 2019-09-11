import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import TradeChart from "../components/TradeChart";
import TradeChat from "../components/TradeChat";
import TradeMarket from "../components/TradeMarket";
import TradeMLbuy from "../components/TradeMLbuy";
import TradeMLsell from "../components/TradeMLsell";
//import TradeChart from "../components/TradeChart";
import TradeBuyOrder from "../components/TradeBuyOrder";
import TradeSellOrder from "../components/TradeSellOrder";
import TradeOpenOrders from "../components/TradeOpenOrders";
import TradeHistory from "../components/TradeHistory";
import TradeHistory24 from "../components/TradeHistory24";
import MarketActivity from "../components/MarketActivity";

const Trade = () => {
  const [mydate, setMyDate] = useState([]);

  useEffect(() => {
    axios.get(`https://demo3855876.mockable.io/crypto`).then(res => {
      setMyDate(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div
          className="row"
          style={{ margin: "20px 0px", padding: "10px", textAlign: "center" }}
        >
          <div
            className="col-6"
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center"
            }}
          >
            <h4>
              Exchange <span style={{ color: "#186AB4" }}>BAT</span>/BTC
            </h4>
          </div>
          <div className="col" style={{ float: "right" }}>
            <p>
              last price
              <br />
              <span style={{ color: "#69b1a1" }}>0.0</span> $1.2099
            </p>
          </div>
          <div className="col" style={{ float: "right" }}>
            <p>
              24th Change
              <br />
              <span style={{ color: "#69b1a1" }}>+ 0.00%</span>
            </p>
          </div>
          <div className="col" style={{ float: "right" }}>
            <p>
              24th High
              <br />
              <span style={{ color: "#69b1a1" }}>0.00</span>
            </p>
          </div>
          <div className="col" style={{ float: "right" }}>
            <p>
              24th Low
              <br />
              <span style={{ color: "#69b1a1" }}>0.00</span>
            </p>
          </div>
          <div className="col" style={{ float: "right" }}>
            <p>
              24th Volume
              <br />
              <span style={{ color: "#69b1a1" }}>0.00 GTX</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <TradeMarket />
          </div>
          <div className="col-6">
            <TradeChart />
          </div>
          <div className="col-3">
            <TradeChat />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div class="card shadow-sm" style={{ height: "auto" }}>
              <div class="card-body" style={{ padding: "0px" }}>
                <TradeMLbuy />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card shadow-sm" style={{ height: "200px" }}>
              <div class="card-body">
                <TradeBuyOrder />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card shadow-sm" style={{ height: "200px" }}>
              <div class="card-body">
                <TradeSellOrder />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card shadow-sm" style={{ height: "auto" }}>
              <div class="card-body" style={{ padding: "0px" }}>
                <TradeMLsell />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-9">
            <div class="card shadow-sm" style={{ height: "420px" }}>
              <div class="card-body" style={{ padding: "0px" }}>
                <TradeOpenOrders />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card shadow-sm" style={{ height: "420px" }}>
              <div class="card-body" style={{ padding: "0px" }}>
                <TradeHistory />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row" style={{ marginBottom: "40px" }}>
          <div className="col-9">
            <div class="card shadow-sm" style={{ height: "420px" }}>
              <div class="card-body" style={{ padding: "0px" }}>
                <TradeHistory24 />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card shadow-sm" style={{ height: "420px" }}>
              <div class="card-body" style={{ padding: "0px" }}>
                <MarketActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trade;
