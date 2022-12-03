import React, { useState } from "react";
import TableHeadButtons from "./TableHeadButtons";
import "../styles/CoinTable.css";
import currencyFormatter from "../utils/currencyFormatter";

const CoinTable = ({ coins, loading, currency }) => {
  const [sortBy, setSortBy] = useState("market_cap_rank");
  const [currentSort, setCurrentSort] = useState("desc");

  const tableHeaders = [
    { label: "market_cap_rank", text: "#" },
    { label: "name", text: "Name" },
    { label: "symbol", text: "Symbol" },
    { label: "current_price", text: "Price" },
    { label: "price_change_percentage_1h_in_currency", text: "1h" },
    { label: "price_change_percentage_24h_in_currency", text: "24h" },
    { label: "price_change_percentage_7d_in_currency", text: "7d" },
    { label: "price_change_percentage_30d_in_currency", text: "30d" },
    { label: "price_change_percentage_1y_in_currency", text: "1y" },
    { label: "market_cap", text: "Market Cap" },
  ];

  const sortType = {
    desc: {
      class: "sort-up",
      fn: (a, b) =>
        a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0,
    },
    asc: {
      class: "sort-down",
      fn: (a, b) =>
        a[sortBy] < b[sortBy] ? 1 : a[sortBy] > b[sortBy] ? -1 : 0,
    },
  };

  const handleSortChange = (id) => {
    setSortBy(id);
    switch (currentSort) {
      case "desc":
        setCurrentSort("asc");
        break;
      case "asc":
        setCurrentSort("desc");
        break;
      default:
        break;
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container my-3 ">
      <table className="table coin-table">
        <thead className="thead-light">
          <tr>
            {tableHeaders.map((header) => (
              <th key={header.label}>
                <TableHeadButtons
                  label={header.label}
                  text={header.text}
                  handleSortChange={handleSortChange}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coins.sort(sortType[currentSort].fn).map((coin) => (
            <tr key={coin.id}>
              <td>
                {coin.market_cap_rank ? `${coin.market_cap_rank}` : `N/A`}
              </td>
              <td className="col">
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "20px", height: "20px" }}
                />{" "}
                {coin.name}
              </td>
              <td className="text-uppercase col">{coin.symbol}</td>
              <td className="col">
                {coin.current_price
                  ? `${currencyFormatter(currency)}${coin.current_price.toFixed(
                      2
                    )}`
                  : `N/A`}
              </td>
              <td className="col">
                {coin.price_change_percentage_1h_in_currency
                  ? `${coin.price_change_percentage_1h_in_currency.toFixed(2)}%`
                  : `N/A`}
              </td>
              <td className="col">
                {coin.price_change_percentage_24h_in_currency
                  ? `${coin.price_change_percentage_24h_in_currency.toFixed(
                      2
                    )}%`
                  : `N/A`}
              </td>
              <td className="col">
                {coin.price_change_percentage_7d_in_currency
                  ? `${coin.price_change_percentage_7d_in_currency.toFixed(2)}%`
                  : `N/A`}
              </td>
              <td className="col">
                {coin.price_change_percentage_30d_in_currency
                  ? `${coin.price_change_percentage_30d_in_currency.toFixed(
                      2
                    )}%`
                  : `N/A`}
              </td>
              <td className="col">
                {coin.price_change_percentage_1y_in_currency
                  ? `${coin.price_change_percentage_1y_in_currency.toFixed(2)}%`
                  : `N/A`}
              </td>
              <td className="col">
                {coin.market_cap
                  ? `${currencyFormatter(currency)}${coin.market_cap}`
                  : `N/A`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
