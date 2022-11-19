import React, { useState, useEffect } from "react";

const CoinTable = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      );
      const data = await response.json();
      setCoins(data);
    };
    fetchCoins();
  });

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className="col">
            <th scope="col">#</th>
            <th scope="col">Coin</th>
            <th scope="col">symbol</th>
            <th scope="col">Price</th>
            <th scope="col">1h</th>
            <th scope="col">24h</th>
            <th scope="col">7d</th>
            <th scope="col">30d</th>
            <th scope="col">1y</th>
            <th scope="col">Market Cap</th>
          </tr>
        </thead>
        {coins.map((coin) => (
          <tbody key={coin.id}>
            <tr>
              <td>{coin.market_cap_rank}</td>
              <td>
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "20px", height: "20px" }}
                />{" "}
                {coin.name}
              </td>
              <td>{coin.symbol}</td>
              <td>${coin.current_price.toFixed(2)}</td>
              <td>{coin.price_change_percentage_1h_in_currency.toFixed(2)}</td>
              <td>{coin.price_change_percentage_24h_in_currency.toFixed(2)}</td>
              <td>{coin.price_change_percentage_30d_in_currency.toFixed(2)}</td>
              <td>{coin.price_change_percentage_7d_in_currency.toFixed(2)}</td>
              <td>${coin.price_change_percentage_1y_in_currency.toFixed(2)}</td>
              <td>${coin.market_cap}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default CoinTable;
