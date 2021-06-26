import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`;
const AirlineLogo = styled.div`
  width: 50px;
  margin: 0 auto;
  padding: 18px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;

const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20 px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Airline = (props) => {
  const { image_url, name, avg_score, slug } = props.attributes;
  return (
    <Card>
      <AirlineLogo>
        <img src={image_url} alt={name} />
      </AirlineLogo>
      <div className="airline-name">{name}</div>
      <div className="airline-score">{avg_score}</div>
      <AirlineName>
        <LinkWrapper>
          <Link to={`/airlines/${slug}`}>View Airline</Link>
        </LinkWrapper>
      </AirlineName>
    </Card>
  );
};

export default Airline;
