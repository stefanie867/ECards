import React, { useState, useEffect } from 'react';
import Card from '../Card/Card.widget';
import {StyledDiv, StyledGridList} from '../../styled/styled.components';
import { getContent } from '../../api/contentApi';
import {map} from 'lodash';

const Cards = () => {
  const [mounted, setMounted] = useState(false);
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      getContent().then(json => setContent(json));
    }
  }, [mounted]);

  return (
    <StyledDiv>
      <StyledGridList>
        {map(content, c => (
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

export default Cards;