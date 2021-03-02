import React, { useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import GameIcon from '@material-ui/icons/Games';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import { UserInfo } from '../interfaces/interfaces';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import SaveGameState from '../utils/saveGameState';
import navbarStyles from '../styles/navbar-style';

export const Navbar: React.FunctionComponent<UserInfo> = (props) => {
  const classes = navbarStyles();
  const [isDarkState, setDarkState] = SaveGameState('isDarkState', false);
  const [isMuted, setIsMuted] = SaveGameState('isMuted', false);
  const history = useHistory();

  const handleThemeChange = () => {
    setDarkState(!isDarkState);
  };

  const handleSoundChange = () => {
    setIsMuted(!isMuted);
  };

  const handleExitLogin = () => {
    props.handlerUserNameFromParent('');
    props.handlerUserScoreFromParent(0);
    localStorage.clear();
    history.push('/login');
  }

  useEffect(() => {
    props.handlerThemeFromParent(isDarkState);
    props.handlerSoundsFromParent(isMuted);
  });

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
        <Tooltip title={isDarkState ? 'Make theme light' : 'Make theme dark'}>
          <IconButton
            onClick={handleThemeChange}
          >
            {isDarkState ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Tooltip>
        <Tooltip title={isMuted ? 'Turn the volume off' : 'Turn the sound on'}>
          <IconButton
            onClick={handleSoundChange}
          >
            {isMuted ? <VolumeUpIcon /> : <VolumeOffIcon />}
          </IconButton>
        </Tooltip>
        <Link
          color='inherit'
          to='/about'
          component={RouterLink}
          className={classes.link}
        >
          About the game
        </Link>
        <Link
          color='inherit'
          // to='/login'
          // component={RouterLink}
          component="button"
          className={classes.linkText}
          onClick={handleExitLogin}
        >
          {props.userName ? 'Exit' : 'Login'}
        </Link>
      </Toolbar>
    </AppBar>
  )
}
