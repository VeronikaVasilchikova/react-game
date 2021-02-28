import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import GameIcon from '@material-ui/icons/Games';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { UserInfo } from '../interfaces/interfaces';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import MuteSound from '../assets/sounds/MuteSound.mp3';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    paddingRight: 24,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(2),
  }
}));

export const Navbar: React.FunctionComponent<UserInfo> = (props) => {
  const classes = useStyles();
  const [isDarkState, setDarkState] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleThemeChange = () => {
    setDarkState(!isDarkState);
    // props.handlerThemeFromParent(isDarkState);
  };

  useEffect(() => {
    props.handlerThemeFromParent(isDarkState);
  });

  const [playActive] = useSound(
    MuteSound,
    { volume: 0.25 }
  );

  // const [playOn] = useSound(
  //   '/sounds/pop-up-on.mp3',
  //   { volume: 0.25 }
  // );
  // const [playOff] = useSound(
  //   '/sounds/pop-up-off.mp3',
  //   { volume: 0.25 }
  // );

  return (
    <AppBar position='relative'>
      <Toolbar className={classes.toolbar}>
        <GameIcon className={classes.icon} />
        <Typography variant='h6' color='inherit' noWrap className={classes.title}>
          React Memory Game
        </Typography>
        {props.userName ?
          <Typography variant='h6' color='inherit' noWrap className={classes.title}>
            User name: {props.userName}
          </Typography> :
          null}
        {props.userName ?
          <Typography variant='h6' color='inherit' noWrap className={classes.title}>
            Score: {props.userScore}
          </Typography> :
        null}
        <IconButton
          onClick={handleThemeChange}
        >
          {isDarkState ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <IconButton
          onClick={() => setIsMuted(!isMuted)}
          onMouseDown={() => playActive()}
          // onMouseUp={() => {
          //   isMuted ? playOff() : playOn();
          // }}
        >
          {isMuted ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
        <Link color='inherit' to='/about' component={RouterLink} className={classes.link}>About the game</Link>
        <Link color='inherit' to='/login' component={RouterLink}>{props.userName ? 'Exit' : 'Login'}</Link>
      </Toolbar>
    </AppBar>
  )
}
