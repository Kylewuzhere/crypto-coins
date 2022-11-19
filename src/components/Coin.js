import React from "react";

const Coin = ({
  symbol,
  name,
  image,
  price,
  cap,
  marketRank,
  hourChange,
  dayChange,
  weekChange,
  monthChange,
  yearChange,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="coin">
          <p>{marketRank}</p>
          <img src={image} alt={name} />
          <p>{name}</p>
          <p>{symbol}</p>
        </div>
        <div className="coin-data">
          <p>${price}</p>
          <p>{hourChange.toFixed(2)}</p>
          <p>{dayChange.toFixed(2)}</p>
          <p>{weekChange.toFixed(2)}</p>
          <p>{monthChange.toFixed(2)}</p>
          <p>${yearChange.toLocaleString()}</p>
          <p>${cap}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
