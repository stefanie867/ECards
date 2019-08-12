import React, {useState} from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {StyledCard, StyledAvatar, StyledCardMedia, StyledIconButton} from '../../styled/styled.components';
import PropTypes from 'prop-types';

const Card = (props) =>  {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <StyledAvatar aria-label="recipe">
            E
          </StyledAvatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.subheader}
      />
      <StyledCardMedia
        image={props.media}
        title={props.mediaTitle}
      />
      <CardContent>
        {props.content}
      </CardContent>
      <CardActions disableSpacing>
        <StyledIconButton
          expanded={expanded ? 1 : 0}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </StyledIconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.detailedContent}
        </CardContent>
      </Collapse>
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  mediaTitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  detailedContent: PropTypes.string.isRequired,
};

export default Card;