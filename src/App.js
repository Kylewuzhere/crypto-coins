import "./App.css";
import React, { useState, useEffect } from "react";
import CoinTable from "./components/CoinTable";
import Pagination from "./components/Pagination";
import { api } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(15);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchAllCoins = async () => {
      setLoading(true);
      const data = await api.fetchAllCoins();
      setTotalPages(Math.ceil(data.length / coinsPerPage));
      setLoading(false);
    };
    fetchAllCoins();
  }, [coinsPerPage]);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      const data = await api.fetchCoins(coinsPerPage, currentPage);
      setCoins(data);
      setLoading(false);
    };
    fetchCoins();
  }, [currentPage, coinsPerPage]);

  return (
    <div className="App">
      <h1>Crypto Coins</h1>
      <CoinTable coins={coins} loading={loading} />
      <Pagination
        onNext={() => {
          setCurrentPage(currentPage + 1);
        }}
        onPrev={() => {
          setCurrentPage(currentPage - 1);
        }}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
