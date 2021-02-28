import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import GiHubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  copyright: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  link: {
    marginRight: theme.spacing(2),
  }
}));

export const Copyright: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="sm">
        <Toolbar>
          <Typography variant="body2" color="inherit" className={classes.copyright}>
            {new Date().getFullYear()} {'Copyright © '}
          </Typography>
          <GiHubIcon className={classes.icon}/>
          <Link color='inherit' href='https://github.com/VeronikaVasilchikova/react-game' className={classes.link}>
            Source code
          </Link>{' '}
          <YoutubeIcon className={classes.icon}/>
          <Link color='inherit' href='https://github.com/VeronikaVasilchikova/react-game'>
            Description
          </Link>{' '}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
