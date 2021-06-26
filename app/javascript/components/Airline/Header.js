import React from 'react';

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.reviews.length;
  return (
    <div className="wrapper">
      <h1>
        <img src={image_url}  alt={name} /> { name }
      </h1>
      <div>
        <div className="totalReviews">{total} User Reviews</div>
        <div className="totalRating"></div>
        <div className="totalOutOf">{avg_score} out of 5</div>
      </div>
    </div>
  );
};

export default Header;
