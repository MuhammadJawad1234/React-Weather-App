import React, { useEffect, useState } from "react";

const Teamp = () => {
  const [city, setCity] = useState([]);
  const [search, setSearch] = useState("karachi");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f98c1d5b1e89e8b8c1e476df197dc924`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      console.log(resJson);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="main-div">
      <input
        type="search"
        className="input-fild"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {!city ? (
        <p className="error">No Data Found</p>
      ) : (
        <div>
          <h1 className="city"> {search} </h1>

          <h1 className="temp"> {city.temp} Cel</h1>

          <h2 className="temp-mix-min">
            {" "}
            Min : {city.temp_min} | Max : {city.temp_max}{" "}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Teamp;
