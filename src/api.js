export const api = {
  fetchAllCoins: async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/list`,
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
    return data;
  },
  fetchCoins: async (coinsPerPage, currentPage) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsPerPage}&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`,
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
    return data;
  },
};
