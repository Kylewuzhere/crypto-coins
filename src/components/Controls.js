import React from "react";
import "../styles/Controls.css";

const Controls = ({ setCoinsPerPage, setCurrency }) => {
  const handleCoinsPerPage = (e) => {
    setCoinsPerPage(e.target.value);
  };

  const handleCurrency = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="container my-4 control-group d-flex flex-row">
      <div className="col-6 d-flex flex-column justify-content-center">
        <label htmlFor="coinsPerPage">Coins per page</label>
        <select
          className="mx-auto"
          onChange={handleCoinsPerPage}
          defaultValue={20}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="250">250</option>
        </select>
      </div>
      <div className="col-6 d-flex flex-column">
        <label htmlFor="currency">Currency</label>
        <select className="mx-auto" onChange={handleCurrency}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="jpy">JPY</option>
        </select>
      </div>
    </div>
  );
};

export default Controls;
