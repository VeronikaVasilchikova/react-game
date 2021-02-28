import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Cards } from './Cards';
import { CardsData } from '../interfaces/interfaces';

const useStyles = makeStyles({
  button: {
    margin: '1rem',
  },
});

export const Game: React.FunctionComponent<CardsData> = (props) => {
  const classes = useStyles();

  const handle = useFullScreenHandle();

  return (
    <Container maxWidth="md">
      <Button
        onClick={handle.enter}
        size="large"
        className={classes.button}
      >
        Enter fullscreen
      </Button>

      <FullScreen handle={handle}>
        <Cards
          endGame={props.endGame}
          isMutedGame={props.isMutedGame}
        />
      </FullScreen>
    </Container>
  );
}
