import React from "react";

const TradeHistory24 = () => {
  return (
    <>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#E8EAF6"
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: "500", paddingTop: "xpx" }}>
          My 24 hour Order History
        </p>
      </div>
      <div
        class="table-responsive scroll"
        style={{ height: "340px", overflowY: "auto" }}
      >
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Pair</th>
              <th scope="col">Type</th>
              <th scope="col">Side</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
              <th scope="col">Filled%</th>
              <th scope="col">Total</th>
              <th scope="col">Trigger Conditions</th>
              <th scope="col">
                {/* <button
                  class="btn btn-danger btn-sm dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Cancel
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Cancel Bids
                  </a>
                  <a class="dropdown-item" href="#">
                    Cancel Asks
                  </a>
                  <a class="dropdown-item" href="#">
                    Cancel All
                  </a>
                </div>
               */}
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">26-07-2019</th>
              <td>BTC</td>
              <td>type1</td>
              <td>side1</td>
              <td>0.2</td>
              <td>0.01</td>
              <td>18%</td>
              <td>1.05</td>
              <td>0.215</td>
              <td />
            </tr>
            <tr>
              <th scope="row">26-07-2019</th>
              <td>BTC</td>
              <td>type1</td>
              <td>side1</td>
              <td>0.2</td>
              <td>0.01</td>
              <td>18%</td>
              <td>1.05</td>
              <td>0.215</td>
              <td />
            </tr>
            <tr>
              <th scope="row">26-07-2019</th>
              <td>BTC</td>
              <td>type1</td>
              <td>side1</td>
              <td>0.2</td>
              <td>0.01</td>
              <td>18%</td>
              <td>1.05</td>
              <td>0.215</td>
              <td />
            </tr>
            <tr>
              <th scope="row">26-07-2019</th>
              <td>BTC</td>
              <td>type1</td>
              <td>side1</td>
              <td>0.2</td>
              <td>0.01</td>
              <td>18%</td>
              <td>1.05</td>
              <td>0.215</td>
              <td />
            </tr>
            <tr>
              <th scope="row">26-07-2019</th>
              <td>BTC</td>
              <td>type1</td>
              <td>side1</td>
              <td>0.2</td>
              <td>0.01</td>
              <td>18%</td>
              <td>1.05</td>
              <td>0.215</td>
              <td />
            </tr>
            <tr>
              <th scope="row">26-07-2019</th>
              <td>BTC</td>
              <td>type1</td>
              <td>side1</td>
              <td>0.2</td>
              <td>0.01</td>
              <td>18%</td>
              <td>1.05</td>
              <td>0.215</td>
              <td />
            </tr>
            <tr>
              <th scope="row">26-07-2019</th>
              <td>BTC</td>
              <td>type1</td>
              <td>side1</td>
              <td>0.2</td>
              <td>0.01</td>
              <td>18%</td>
              <td>1.05</td>
              <td>0.215</td>
              <td />
            </tr>
            <tr>
              <th scope="row">26-07-2019</th>
              <td>BTC</td>
              <td>type1</td>
              <td>side1</td>
              <td>0.2</td>
              <td>0.01</td>
              <td>18%</td>
              <td>1.05</td>
              <td>0.215</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TradeHistory24;
