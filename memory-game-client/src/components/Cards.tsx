import React from 'react';
import { CardImages } from '../card-pictures/index';
import { CardItem } from '../interfaces/interfaces';

export const Cards: React.FunctionComponent<CardItem> = (props) => {
  let characters: any[] = [];
  const audioCardClick = new Audio('/sounds/CardClick.mp3');
  const audioMatchCards = new Audio('/sounds/MatchCards.mp3');
  const audioFailedMatch = new Audio('/sounds/FailedMatch.mp3');
  const audioGameEnd = new Audio('/sounds/GameEnd.mp3');

  const playOnCardClick = () => {
    audioCardClick.play();
  }

  const playMatchCards = () => {
    audioMatchCards.play();
  }

  const playFailedMatch = () => {
    audioFailedMatch.play();
  }

  const playGameEnd = () => {
    audioGameEnd.play();
  }

  const onClickOption = (event: { target: any; }) => {
    let character = event.target;

    if(character.getAttribute('data-check') === 'found') {
      return;
    }

    if(character !== characters[0]) {
      flipTheAction(character);
      characters.push(character);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      if(props.isMutedGame) {
        playOnCardClick();
      }
    }
    else {
      flipTheAction(character);
      characters = [];
    }

    if (characters.length > 2) {
      if (!checkCardName(characters[0], characters[1])) {
        if(props.isMutedGame) {
          playFailedMatch();
        }
        setTimeout(() => {
          flipTheAction(characters[0]);
          flipTheAction(characters[1]);
          characters.shift();
          characters.shift();
        }, 0);
      }
      else {
        if(props.isMutedGame) {
          playMatchCards();
        }
        setTimeout(() => {
          characters.shift();
          characters.shift();
        }, 0);
      }
    }

    let allPictures = document.getElementsByClassName('card-with-space');
    if (allPictures.length < 1) {
      props.endGame(true);
      if(props.isMutedGame) {
        playGameEnd();
      }
      let reset = document.getElementsByClassName('card-with-hero');
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add('card-with-space');
        reset[i].setAttribute('data-check', 'false');
        characters = [];
      }
    }
  };

  const checkCardName = (character1: { getAttribute: (arg0: string) => any; setAttribute: (arg0: string, arg1: string) => void; },
    character2: { getAttribute: (arg0: string) => any; setAttribute: (arg0: string, arg1: string) => void; }) => {
      if(character1.getAttribute('data-name') === character2.getAttribute('data-name')) {
      character1.setAttribute('data-check', 'found');
      character2.setAttribute('data-check', 'found');
      return true;
    }
    return false;
  };

  const flipTheAction = (target: { getAttribute: (arg0: string) => string;
    setAttribute: (arg0: string, arg1: string) => void;
    classList: { add: (arg0: string) => void; remove: (arg0: string) => void; }; }) => {
      if(target.getAttribute('data-check') === 'true') {
        target.setAttribute('data-check', 'false');
        target.classList.add('card-with-space');
      }
      else {
        target.setAttribute('data-check', 'true');
        target.classList.remove('card-with-space');
      }
  };

  return (
    <div className='card-field'>
      {CardImages
      .sort(() => Math.random() - 0.5)
      .map((element, index) => {
        return (
          <div
            className='card-with-hero card-with-space'
            key={index}
            data-check='false'
            data-name={element.name}
            style={{ background: `url(${element.picture})` }}
            onClick={onClickOption}
            >
          </div>
        );
      })}
    </div>
  );
}
