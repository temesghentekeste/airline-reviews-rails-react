import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Header from './Header';

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
    <div className="wrapper">
      <div className="column">
        {loaded && (
          <Header
            attributes={airline.data.attributes}
            reviews={airline.data.relationships.reviews}
          />
        )}
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">[Review Form Goes Here]</div>
      </div>
    </div>
  );
};

export default Airline;
