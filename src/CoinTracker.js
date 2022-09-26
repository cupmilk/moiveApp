import React, { useEffect, useState } from "react";

const CoinTracker = () => {
  const [coinLoading, setCoinLoading] = useState(true);
  const [tokens, setTokens] = useState([]);
  const [money, setMoney] = useState(0);
  const BTC_PRICE = 18856.73037018876;
  const [tokenPirce, setTokenPirce] = useState(BTC_PRICE);
  const handleSelect = (e) => {
    console.log(e.target.value);
    setTokenPirce(e.target.value);
  };

  const moneyChange = (e) => {
    setMoney(e.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setTokens(json);
        setCoinLoading(false);
      });
  }, []);
  console.log(money);
  return (
    <div>
      <h1>the coins{coinLoading ? null : `(${tokens.length})`}</h1>
      {coinLoading ? (
        <strong>Loading</strong>
      ) : (
        <select id="token_list" value={tokenPirce} onChange={handleSelect}>
          {tokens.map((token, id) => (
            <option value={token.quotes.USD.price}>
              {token.name} ({token.symbol})
            </option>
          ))}
        </select>
      )}
      <input
        id="moneyChange"
        value={money}
        type="number"
        onChange={moneyChange}
        placeholder="change money"
        min={0}
      ></input>
      {/* 흠 공백일때는 안나타나게 하고싶은데 어찌할까 */}
      <h4>{money === 0 || undefined ? null : tokenPirce / money + "USD"}</h4>
    </div>
  );
};

export default CoinTracker;
