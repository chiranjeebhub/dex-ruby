import React, { PureComponent, useContext, useEffect } from "react";

// import { CoinContext } from "../Context";

import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    date: "1",
    BAT: "100",
    BTC: "600"
  },
  {
    date: "2",
    BAT: "400",
    BTC: "300"
  },
  {
    date: "3",
    BAT: "200",
    BTC: "400"
  },
  {
    date: "4",
    BAT: "500",
    BTC: "600"
  },
  {
    date: "5",
    BAT: "250",
    BTC: "350"
  },
  {
    date: "6",
    BAT: "200",
    BTC: "600"
  }
];

//const lastItem = data[data.length - 1];

const Chart = ({ coin }) => {
  //const value = useContext(CoinContext);

  return (
    <div className="card shadow" style={{ width: "100%", height: "360px" }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
          style={{ padding: "0px!important" }}
        >
          <Tooltip />
          <Area
            type="monotone"
            dataKey="BAT"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="BTC"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
