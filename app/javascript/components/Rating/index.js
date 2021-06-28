import React from 'react';
import './Rating.css';

const Rating = (props) => {
  if (!props.score) {
    return <div></div>;
  }

  const score = props.score;

  const stars = [1, 2, 3, 4, 5].map((item, index) => {
    if (item <= score) {
      return <i className="fa fa-star rating" key={index}></i>;
    } else {
      return <i className="fa fa-star" key={index}></i>;
    }
  });
  return <div>{stars}</div>;
};

export default Rating;
