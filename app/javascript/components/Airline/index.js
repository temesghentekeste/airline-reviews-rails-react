import React from 'react';
import { Link } from 'react-router-dom'

const Airline = (props) => {
    const { image_url, name, avg_score, slug} = props.attributes;
  return (
    <div className="card">
      <div className="airline-log">
        <img src={image_url} alt={name} />
      </div>
      <div className="airline-name">{name }</div>
      <div className="airline-score">{avg_score}</div>
      <div className="airline-link">
          <Link to={`/airlines/${slug}`}>View Airline</Link>
      </div>
    </div>
  );
};

export default Airline;
