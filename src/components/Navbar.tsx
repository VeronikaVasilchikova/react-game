import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import GameIcon from '@material-ui/icons/Games';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';
import { UserInfo } from '../interfaces/interfaces';

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
  // const [themeState, setThemeState] = useState(true);

  // const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setThemeState(e.target.checked);
  // }

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
        <Link color='inherit' to='/about' component={RouterLink} className={classes.link}>About the game</Link>
        <Link color='inherit' to='/login' component={RouterLink}>Login</Link>
      </Toolbar>
    </AppBar>
  )
}
