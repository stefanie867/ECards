import React, {useState} from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {StyledCard, StyledAvatar, StyledCardMedia, StyledIconButton} from './Cards.style';
import PropTypes from 'prop-types';
import {DropzoneArea} from 'material-ui-dropzone';

const Card = (props) =>  {
  const [expanded, setExpanded] = useState(false);
  const [media, setMedia] = useState(props.media);
  const [mediaTitle, setMediaTitle] = useState(props.mediaTitle);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const handleDropzoneAreaChange = (files) => {
    handleImageSelected(files[0]);
  };

  const handleImageSelected = (file) => {
    let fileReader = new FileReader();

    fileReader.onload = function(e) {
        setMediaTitle(file.name);
        setMedia(e.target.result);
    }

    fileReader.readAsDataURL(file);
};

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
      {media && <StyledCardMedia
        image={media}
        title={mediaTitle}
      />}
      {!media && <DropzoneArea 
        onChange={handleDropzoneAreaChange}
        acceptedFiles={['image/*']}
        filesLimit={1}
        maxFileSize={30000000}
        />}
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