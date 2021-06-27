import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Header from './Header';

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr)
`

const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`

const Main = styled.div`
  padding-left: 50px;
`



const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // /api/v1/airlines/american-airline
    // /api/v1/airlines/delta

    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`;

    axios
      .get(url)
      .then((res) => {
        setAirline(res.data);
        setLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Wrapper>
      <Column>
        <Main>
          {loaded && (
            <Header
              attributes={airline.data.attributes}
              reviews={airline.data.relationships.reviews}
            />
          )}
          <div className="reviews"></div>
        </Main>
      </Column>
      <Column>
        <div className="review-form">[Review Form Goes Here]</div>
      </Column>
    </Wrapper>
  );
};

export default Airline;
