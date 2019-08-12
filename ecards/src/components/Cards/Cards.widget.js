import React, { useState, useEffect } from 'react';
import Card from './Card.widget';
import {StyledDiv, StyledGridList} from './Cards.style';
import {map} from 'lodash';
import PropTypes from 'prop-types';

const Cards = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      props.getContent();
    }
  }, [mounted]);

  return (
    <StyledDiv>
      <StyledGridList>
        {map(props.content, c => (
          <Card 
            key={c.key}
            title={c.title}
            subheader={c.subheader}
            media={c.media}
            mediaTitle={c.mediaTitle}
            content={c.content}
            detailedContent={c.detailedContent}
          />
        ))}
      </StyledGridList>
    </StyledDiv>
  );
}

Cards.propTypes = {
  isContentLoading: PropTypes.bool.isRequired,
  content: PropTypes.array.isRequired,
  getContent: PropTypes.func.isRequired
};

export default Cards;