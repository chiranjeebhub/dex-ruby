import React from "react";
//import { useTable } from "react-table";
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from "match-sorter";

const HistoryOrder = () => {
  const data = [
    {
      id: "1",
      type: "Type 1",
      state: "State 1",
      market: "BTC",
      price: "2000",
      volume: "5522",
      fulfilled: "fulfilled",
      avgprice: "5000",
      createdat: "24-07"
    },
    {
      id: "2",
      type: "Type 1",
      state: "State 1",
      market: "BTC",
      price: "2000",
      volume: "5522",
      fulfilled: "fulfilled",
      avgprice: "5000",
      createdat: "24-07"
    },
    {
      id: "3",
      type: "Type 1",
      state: "State 1",
      market: "BTC",
      price: "2000",
      volume: "5522",
      fulfilled: "fulfilled",
      avgprice: "5000",
      createdat: "24-07"
    },
    {
      id: "4",
      type: "Type 1",
      state: "State 1",
      market: "BTC",
      price: "2000",
      volume: "5522",
      fulfilled: "fulfilled",
      avgprice: "5000",
      createdat: "24-07"
    },
    {
      id: "5",
      type: "Type 1",
      state: "State 1",
      market: "ETH",
      price: "3000",
      volume: "5524",
      fulfilled: "fulfilled",
      avgprice: "5060",
      createdat: "28-07"
    },
    {
      id: "6",
      type: "Type 1",
      state: "State 1",
      market: "BTC",
      price: "2000",
      volume: "5522",
      fulfilled: "fulfilled",
      avgprice: "5000",
      createdat: "24-07"
    }
  ];

  const columns = [
    {
      Header: "Id",
      id: "id",
      accessor: d => d.id,
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["id"] }),
      filterAll: true
    },
    {
      Header: "Type",
      id: "type",
      accessor: d => d.type,
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["type"] }),
      filterAll: true
    },
    {
      Header: "State",
      id: "state",
      accessor: d => d.state,
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["state"] }),
      filterAll: true
    },
    {
      Header: "Market",
      id: "market",
      accessor: d => d.market,
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["market"] }),
      filterAll: true
    },
    {
      Header: "	Price",
      id: "price",
      accessor: d => d.price,
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["price"] }),
      filterAll: true
    },
    {
      Header: "Volume",
      id: "volume",
      accessor: d => d.volume,
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["volume"] }),
      filterAll: true
    },
    {
      Header: "Avg. price",
      id: "avgprice",
      accessor: d => d.avgprice,
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["avgprice"] }),
      filterAll: true
    },
    {
      Header: "Fulfilled",
      id: "fulfilled",
      accessor: d => d.fulfilled,
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["fulfilled"] }),
      filterAll: true
    },
    {
      Header: "Created at",
      id: "createdat",
      accessor: d => d.createdat,
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["createdat"] }),
      filterAll: true
    }
  ];

  return (
    <div class="card">
      <div class="card-body">This is Order History.</div>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={3}
        pageSizeOptions={[3, 6]}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value
        }
      />
    </div>
  );
};

export default HistoryOrder;
