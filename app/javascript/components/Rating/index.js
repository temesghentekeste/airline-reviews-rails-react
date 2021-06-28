import React from 'react';
import styled from 'styled-components'

const UnratedStarContainer = styled.div`
    display: inline-block;
`

const RatedStarContainer = styled.div`
    display: inline-block;
    color: hsl(46, 99%, 50%);;
`



const Rating = (props) => {
  if (!props.score) {
    return <div></div>;
  }

  const score = props.score;

  const stars = [1, 2, 3, 4, 5].map((item, index) => {

    if(item <= score ) {
        return (
      <RatedStarContainer
        key={index}
      >
        <i className="fa fa-star"></i>
      </RatedStarContainer>
    ) 
    } else {
        return (
            <UnratedStarContainer
              key={index}
            >
              <i className="fa fa-star"></i>
            </UnratedStarContainer>
          )
    }
   ;
  });
  return <div>{stars}</div>;
};

export default Rating;
