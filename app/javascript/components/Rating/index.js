import React from 'react';
import './Rating.css';

const Rating = (props) => {
  if (!props.score) {
    return <div></div>;
  }

  const score = props.score;

  const stars = [1, 2, 3, 4, 5].map((item, index) => {
    return (
      <div
        key={index}
        className={
          item <= score ? 'rating-container rating' : 'rating-container'
        }
      >
        <i className="fa fa-star"></i>
      </div>
    );
  });
  return <div>{stars}</div>;
};

export default Rating;
