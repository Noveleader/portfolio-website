const fetchPrices = async (): Promise<{ [key: string]: string }> => {
  const symbols = [
    "BTCUSDT",
    "ETHUSDT",
    "ADAUSDT",
    "XRPUSDT",
    "BNBUSDT",
    "SOLUSDT",
    "DOGEUSDT",
    "MKRUSDT",
    "TRXUSDT",
    "AVAXUSDT",
    "LINKUSDT",
    "NEARUSDT",
    "LTCUSDT",
    "MATICUSDT",
    "UNIUSDT",
    "ICPUSDT",
    "ARBUSDT",
    "APTUSDT",
    "XLMUSDT",
    "XMRUSDT",
  ];

  const url = "https://api.mexc.com/api/v3/ticker/price";

  try {
    console.log("Fetching prices from MEXC API");
    const response = await fetch(url, {
      headers: {
        "Cache-Control": "no-store, max-age=0", // Prevent caching
      },
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `Failed to fetch prices: ${response.status} ${response.statusText}: ${errorText}`
      );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const prices: { [key: string]: string } = {};

    data.forEach((item: any) => {
      if (symbols.includes(item.symbol)) {
        const tokenName = item.symbol.replace("USDT", "");
        prices[tokenName] = parseFloat(item.price).toFixed(2);
      }
    });
    console.log("Fetched prices successfully:", prices);
    return prices;
  } catch (error) {
    console.error("Error fetching prices:", error);
    return {};
  }
};

export default fetchPrices;
