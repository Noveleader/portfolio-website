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

  const url = "https://api.binance.com/api/v3/ticker/price";

  try {
    const response = await fetch(url);
    const data = await response.json();
    const prices: { [key: string]: string } = {};

    data.forEach((item: any) => {
      if (symbols.includes(item.symbol)) {
        const tokenName = item.symbol.replace("USDT", "");
        prices[tokenName] = parseFloat(item.price).toFixed(2);
      }
    });
    console.log(prices);
    return prices;
  } catch (error) {
    console.error("Error fetching prices:", error);
    return {};
  }
};

export default fetchPrices;
