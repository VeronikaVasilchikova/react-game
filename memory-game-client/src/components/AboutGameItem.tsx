import React from 'react';
import { Card } from '@material-ui/core';
import { CarouselItem } from '../interfaces/interfaces';
import aboutGameItemStyle from '../styles/about-game-item-style';

export const AboutGameItem: React.FunctionComponent<CarouselItem> = (props) => {
  const { name, description } = props.content;
  const classes = aboutGameItemStyle();

  return (
    <Card className={classes.card}>
      <h2>{name}</h2>
      <p className={classes.descr}>{description}</p>
    </Card>
  );
}
