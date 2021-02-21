import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { messages } from "../data/messages";
import { EndGameItem } from '../interfaces/interfaces';

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 200,
    margin: '15% auto',
  },
  title: {
    fontSize: 16,
    paddingTop: 30,
  },
  text: {
    fontSize: 16,
  }
});

export const EndGame: React.FunctionComponent<EndGameItem> = (props) => {
  const classes = useStyles();

  const handleClick = () => {
    props.newGame(false);
  };

  messages.sort(() => Math.random() - 0.5);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {messages[0].title}
        </Typography>
        <Typography className={classes.text} variant="body2" component="p">
          {messages[0].text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={handleClick}>Go Again!</Button>
      </CardActions>
    </Card>
  );
}
