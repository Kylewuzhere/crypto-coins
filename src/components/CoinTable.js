import React from "react";

const CoinTable = ({ coins, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

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
              <td className="text-uppercase">{coin.symbol}</td>
              <td>
                {coin.current_price
                  ? `${coin.current_price.toFixed(2)}%`
                  : `N/A`}
              </td>
              <td>
                {coin.price_change_percentage_1h_in_currency
                  ? `${coin.price_change_percentage_1h_in_currency.toFixed(2)}%`
                  : `N/A`}
              </td>
              <td>
                {coin.price_change_percentage_24h_in_currency
                  ? `${coin.price_change_percentage_24h_in_currency.toFixed(
                      2
                    )}%`
                  : `N/A`}
              </td>
              <td>
                {coin.price_change_percentage_7d_in_currency
                  ? `${coin.price_change_percentage_7d_in_currency.toFixed(2)}%`
                  : `N/A`}
              </td>
              <td>
                {coin.price_change_percentage_30d_in_currency
                  ? `${coin.price_change_percentage_30d_in_currency.toFixed(
                      2
                    )}%`
                  : `N/A`}
              </td>
              <td>
                {coin.price_change_percentage_1y_in_currency
                  ? `${coin.price_change_percentage_1y_in_currency.toFixed(2)}%`
                  : `N/A`}
              </td>
              <td>${coin.market_cap}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default CoinTable;
