import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Airline from '../Airline';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  useEffect(() => {
    axios
      .get('/api/v1/airlines.json')
      .then((res) => setAirlines(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  const grid = airlines.map((item) => (
    <Airline key={item.attributes.name} attributes={item.attributes} />
  ));
  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <p>Honest, unbieased airline reviews</p>
      </div>
      <div className="grid">{grid}</div>
    </div>
  );
};

export default Airlines;
