import React, { useState } from 'react';
import Slide from '@material-ui/core/Slide';
import { AboutGameItem } from './AboutGameItem';
import { AboutGameArrow } from './AboutGameArrow';
import { ABOUT_GAME_INFO_ITEMS } from '../constants/constants';
import { Direction } from '../interfaces/interfaces';

export const AboutGame: React.FunctionComponent = () => {
  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirectionValue, setSlideDirection] = useState<Direction>('down');
  const content = ABOUT_GAME_INFO_ITEMS[index];
  const numSlides = ABOUT_GAME_INFO_ITEMS.length;

  const onArrowClick = (direction: Direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection: Direction = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setIndex(newIndex);
    setSlideDirection(oppDirection);
    setSlideIn(true);
  };

  return (
    <div className='App'>
      <AboutGameArrow
        direction='left'
        clickFunction={() => onArrowClick('left')}
      />
        <Slide in={slideIn} direction={slideDirectionValue} >
          <div>
          <AboutGameItem content={content} />
          </div>
        </Slide>
      <AboutGameArrow
        direction='right'
        clickFunction={() => onArrowClick('right')}
      />
    </div>
  )
}
