import { useQuery } from "react-query";
import axios from "axios";
import "../App.css";

const fetchApplePrice = () => {
  return axios.get("https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=6f583125e791bceb5e95b3307b84bd13");
};

export const StockPriceAAPL = () => {
  const { isLoading, data, isError, error } = useQuery("f1 - drivers", fetchApplePrice, {
    refetchInterval: 100,
  });

  return (
    <>
      <div className="body-wrapper">
        <h2>{data.symbol} Real Time Stock Price</h2>
        {data?.data.map((stockData) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>Symbol: {stockData.symbol} </div>
              <div>Price: {stockData.price} </div>
              <div>Volume: {stockData.volume} </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
