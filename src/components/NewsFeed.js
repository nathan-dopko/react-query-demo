import { useQuery } from "react-query";
import axios from "axios";
import "../App.css";
import moment from "moment";

const fetchNews = () => {
  return axios.get("https://financialmodelingprep.com/api/v3/stock_news?limit=100&apikey=6f583125e791bceb5e95b3307b84bd13");
};

export const NewsFeed = () => {
  const { isLoading, data, isError, error } = useQuery("news-feed-data", fetchNews, {
    refetchInterval: 1000,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error, Box Now!</h2>;
  }

  return (
    <>
      <div className="body-wrapper">
        <h2>Latest Stock News Feed</h2>
        {data?.data.map((stockData) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>Symbol: {stockData.symbol}</div>
              <div>Date: {moment(stockData.publishedDate).format("LLL")}</div>
              <img src={stockData.image} style={{ maxWidth: "300px" }} alt="news" />
            </div>
          );
        })}
      </div>

      <div className="body-wrapper">
        <h2>RQ F1 Drivers 2023</h2>

        <table>
          <thead>
            <th>No.</th>
            <th>Name</th>
            <th>Team</th>
            <th>Salary</th>
            <th>Country</th>
          </thead>
          <tbody>
            {data?.data.map((driver) => {
              return (
                <tr>
                  <td>{driver.id}</td>
                  <td>{driver.name}</td>
                  <td>{driver.team}</td>
                  <td>{driver.salary}</td>
                  <td>{driver.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
