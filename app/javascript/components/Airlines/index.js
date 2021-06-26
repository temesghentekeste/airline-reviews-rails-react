import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`;
const SubHeader = styled.div`
  font-weight: 300px;
  font-size: 26px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

import Airline from './Airline';

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
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <SubHeader>Honest, unbieased airline reviews</SubHeader>
      </Header>
      <Grid>{grid}</Grid>
    </Home>
  );
};

export default Airlines;
