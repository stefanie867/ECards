import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Card from '../Card/Card.widget';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={3}>
        {[1, 2, 3].map(tile => (
          <Card key={tile}/>
        ))}
      </GridList>
    </div>
  );
}

export default Cards;