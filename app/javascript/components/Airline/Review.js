import React from 'react';
import styled from 'styled-components';
import Rating from '../Rating';

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
`;

const RatingContianer = styled.div`
  display: flex;
`;

const Title = styled.div`
  padding: 20px 0px 3px;
  font-weight: bold;
  font-size: 18px;
`;

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`;
const Options = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  flex-direction: columns;
`;

const Icon = styled.button`
  box-shadow: none;
  border-radius: 4px;
  margin: 0 4px;
  i {
    font-size: 18px;
  }
`;

const Review = (props) => {
  const { score, title, description } = props.attributes;
  return (
    <Card>
      <RatingContianer>
        <Rating score={score} />
      </RatingContianer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default Review;
