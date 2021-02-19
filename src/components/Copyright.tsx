import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GiHubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';

export const Copyright: React.FunctionComponent = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <GiHubIcon />
      <Link color="inherit" href="https://github.com/VeronikaVasilchikova/react-game">
        Source code
      </Link>{' '}
      <YoutubeIcon />
      <Link color="inherit" href="https://github.com/VeronikaVasilchikova/react-game">
        Description
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
