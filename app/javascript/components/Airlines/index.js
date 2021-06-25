import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  useEffect(() => {
    axios
      .get('/api/v1/airlines.json')
      .then((res) => setAirlines(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  const list = airlines.map((item) => (
    <li key={item.attributes.name}>{item.attributes.name}</li>
  ));
  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <p>Honest, unbieased airline reviews</p>
      </div>
      <div className="grid">
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default Airlines;
