import React from 'react';
import Card from '../Card/Card.widget';
import {StyledDiv} from '../../styled/styled.components';
import {GridList} from '@material-ui/core';

const Cards = (props) => {
  return (
    <StyledDiv>
      <GridList>
        {[1, 2, 3, 4, 5].map(tile => (
          <Card key={tile}/>
        ))}
      </GridList>
    </StyledDiv>
  );
}

export default Cards;