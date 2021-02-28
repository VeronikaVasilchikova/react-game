import React from 'react';
import { Cards } from './Cards';
import { CardsData } from '../interfaces/interfaces';

export const Game: React.FunctionComponent<CardsData> = (props) => {
  return (
    <Cards endGame={props.endGame} isMutedGame={props.isMutedGame}/>
  );
}
