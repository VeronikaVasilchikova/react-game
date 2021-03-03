import { makeStyles } from '@material-ui/core/styles';

const copyrightStyles = makeStyles((theme) => ({
  copyright: {
    [theme.breakpoints.up('lg')]: {
      flexGrow: 1,
      fontSize: '14px',
    },
    [theme.breakpoints.down('md')]: {
      flexGrow: 1,
      fontSize: '14px',
    },
    [theme.breakpoints.down('sm')]: {
      flexGrow: 'initial',
      marginRight: theme.spacing(2),
      fontSize: '10px',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  logo: {
    [theme.breakpoints.up('lg')]: {
      width: '50px',
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down('md')]: {
      width: '50px',
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      width: '40px',
    },
  },
  link: {
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(2),
      fontSize: '14px',
    },
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(2),
      fontSize: '14px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  }
}));

export default copyrightStyles;
