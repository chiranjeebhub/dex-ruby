import React from "react";
import NavBar from "../components/NavBar";
// import HistoryOrder from "../components/HistoryOrder";
import Deposit from "../components/Deposit";
import Withdrawl from "../components/Withdrawl";

const Funds = () => {
  return (
    <>
      <NavBar />
      <div className="container" style={{ marginTop: "30px" }}>
        <ul class="nav nav-pills" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="order-tab"
              data-toggle="pill"
              href="#pills-balance"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Balances
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="trade-tab"
              data-toggle="pill"
              href="#pills-deposits"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Deposits
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="account-tab"
              data-toggle="pill"
              href="#pills-withdrawl"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Withdrawl
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="account-tab"
              data-toggle="pill"
              href="#pills-transaction"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Transaction History
            </a>
          </li>
        </ul>
        <hr />
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-balance"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{ padding: "30px" }}
          >
            <h2>Balance</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div
            class="tab-pane fade show"
            id="pills-deposits"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{ padding: "10px", marginBottom: "20px" }}
          >
            <Deposit />
            {/* <p>hi</p> */}
          </div>
          <div
            class="tab-pane fade"
            id="pills-withdrawl"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            style={{ padding: "30px" }}
          >
            <Withdrawl />
          </div>
          <div
            class="tab-pane fade"
            id="pills-transaction"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            style={{ padding: "30px" }}
          >
            <h2>Transactions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Funds;
