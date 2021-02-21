import React, { useState, useEffect } from 'react';
import { Game } from './Game';
import { EndGame } from './EndGame';
import { PlayTheGameItem } from '../interfaces/interfaces';

export const PlayTheGame: React.FunctionComponent<PlayTheGameItem> = (props) => {
  const [showEndGame, setShowEndGame] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleScore = (param: number) => {
    props.handlerScoreFromParent(param);
  }

  const handleEndGame = (param: boolean) => {
    if(param) {
      setShowEndGame(true);
      setFinalScore(finalScore + 1);
    }
    else {
      setShowEndGame(false);
    }
    handleScore(finalScore);
  };

  // useEffect(() => {
  //   handleScore(finalScore);
  // });

  return (
    <>
      {showEndGame ? <EndGame newGame={handleEndGame} /> : <Game endGame={handleEndGame} />}
    </>
  );
}
