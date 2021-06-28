import React from 'react';

const Review = (props) => {
  const { score, title, description } = props.attributes;
  return (
    <div className="card">
      <div className="rating-container">
        <div className="rating-score"> {score}</div>

        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Review;
