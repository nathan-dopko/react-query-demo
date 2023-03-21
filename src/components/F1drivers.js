import { useState, useEffect } from "react";
import axios from "axios";

export const F1drivers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/F1drivers")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      }, []);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error, Box Now!</h2>;
  }

  console.log(F1drivers);
  return (
    <>
      <h2>F1 Drivers 2023</h2>
      {data.map((driver) => {
        return (
          <div>
            Name - {driver.name} | Team - {driver.team} | Salary - {driver.salary}
          </div>
        );
      })}
    </>
  );
};
