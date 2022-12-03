import "./App.css";
import React, { useState, useEffect } from "react";
import CoinTable from "./components/CoinTable";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Controls from "./components/Controls";
import { api } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [coinsPerPage, setCoinsPerPage] = useState(20);
  const [currency, setCurrency] = useState("usd");

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
      const data = await api.fetchCoins(coinsPerPage, currentPage, currency);
      setCoins(data);
      setLoading(false);
    };
    fetchCoins();
  }, [coinsPerPage, currentPage, currency]);

  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="mb-4 mt-5">Crypto Coins</h1>
      <SearchBar setSearch={setSearch} />
      <Controls setCoinsPerPage={setCoinsPerPage} setCurrency={setCurrency} />
      <CoinTable coins={searchCoins} loading={loading} currency={currency} />
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
