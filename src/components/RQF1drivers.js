import { useQuery } from "react-query";
import axios from "axios";
import "../App.css";

const fetchF1Drivers = () => {
  return axios.get("http://localhost:3001/F1drivers");
};

export const RQF1drivers = () => {
  const { isLoading, data, isError, error } = useQuery("f1 - drivers", fetchF1Drivers, {});

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error, Box Now!</h2>;
  }

  return (
    <>
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
