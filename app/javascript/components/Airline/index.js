import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    // /api/v1/airlines/american-airline
    // /api/v1/airlines/delta

    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`;

    axios
      .get(url)
      .then((res) => setAirline(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(airline)

  return <div>Airline component</div>;
};

export default Airline;
