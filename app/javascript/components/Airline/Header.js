import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;

  img {
    margin-right: 10px;
    height: 60px;
    weight: 60px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    display: flex;
    align-items: center;
    font-size: 60px;
  }
`;

const TotalRevies = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`;

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.reviews.length;
  console.log(props.reviews)
  return (
    <Wrapper>
      <h1>
        <img src={image_url} alt={name} /> {name}
      </h1>
      <div>
        <TotalRevies>{total} User Reviews</TotalRevies>
        <div className="totalRating"></div>
        <TotalOutOf>{avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  );
};

export default Header;
