import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header';
import ReviewForm from './ReviewForm';
import Review from './Review';

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;

const Main = styled.div`
  padding-left: 50px;
`;

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

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // setReview(Object.assign({}, review, {[name]: value}))
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    console.log(csrfToken);

    const airline_id = parseInt(airline.data.id);
    console.log({ ...review, airline_id });
    axios
      .post('/api/v1/reviews', { ...review, airline_id })
      .then((res) => {
        const included = [...airline.included, res.data.data];
        setAirline({ ...airline, included });
        setReview({ title: '', description: '', score: 0 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  let reviews;

  if (loaded && airline.included) {
    reviews = airline.included.map((item, index) => {
      return <Review key={index} attributes={item.attributes} />;
    });
  }
  return (
    <Wrapper>
      {loaded && (
        <>
          <Column>
            <Main>
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
              <div className="reviews">{reviews && reviews}</div>
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={airline.data.attributes}
              review={review}
              setRating={setRating}
            />
          </Column>
        </>
      )}
    </Wrapper>
  );
};

export default Airline;
