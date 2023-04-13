import React, { useState, useEffect } from "react";
import Port from "./Components/Port";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/data")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setData(() => res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      {data?.map((el) => {
        return <p key={el.id}>{JSON.stringify(el)}</p>;
      })}

      {/* <Port /> */}
    </div>
  );
}

export default App;
