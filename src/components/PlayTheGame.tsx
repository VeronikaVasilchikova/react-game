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
    }
    else {
      setShowEndGame(false);
    }
    handleScore(finalScore);
  };

  useEffect(() => {
    setFinalScore(finalScore => finalScore + 1);
  }, []);

  return (
    <>
      {showEndGame ? <EndGame newGame={handleEndGame} /> : <Game endGame={handleEndGame} isMutedGame={props.isMutedValue}/>}
    </>
  );
}
