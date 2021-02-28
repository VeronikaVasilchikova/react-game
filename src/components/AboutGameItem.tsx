import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { CarouselItem } from '../interfaces/interfaces';

export const AboutGameItem: React.FunctionComponent<CarouselItem> = (props) => {
  const { name, description, backgroundColor } = props.content;

  const useStyles = makeStyles(() => ({
    card: {
      backgroundColor,
      borderRadius: 5,
      padding: '0 50px 50px',
      margin: '0px 25px',
      width: '500px',
      boxShadow: '20px 20px 20px black',
      textAlign: 'center',
    },
    descr: {
      fontSize: '16px'
    }
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <h2>{name}</h2>
      <p className={classes.descr}>{description}</p>
    </Card>
  );
}
