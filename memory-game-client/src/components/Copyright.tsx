import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import GiHubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import copyrightStyles from '../styles/copiright-styles';

export const Copyright: React.FunctionComponent = () => {
  const classes = copyrightStyles();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body2"
            color="inherit"
            className={classes.copyright}
          >
            {new Date().getFullYear()} {'Copyright © '}
          </Typography>
          <img src="https://rs.school/images/rs_school_js.svg" alt="rsschool logo" className={classes.logo}/>
          <Link
            color='inherit'
            href='https://rs.school/js/'
            target="_blank"
            rel="noopener"
            className={classes.link}
          >
            The Rolling Scopes School Course
          </Link>{' '}
          <GiHubIcon className={classes.icon}/>
          <Link
            color='inherit'
            href='https://github.com/VeronikaVasilchikova/react-game'
            target="_blank"
            rel="noopener"
            className={classes.link}
          >
            Source code
          </Link>{' '}
          <YoutubeIcon className={classes.icon}/>
          <Link
            color='inherit'
            href='https://youtu.be/tK1yV-PF8us'
            target="_blank"
            rel="noopener"
          >
            Description
          </Link>{' '}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
