import { makeStyles } from '@material-ui/core/styles';

const navbarStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    paddingRight: 24,
  },
  title: {
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
      marginRight: theme.spacing(1),
      fontSize: '10px',
    },
  },
  linkText: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  }
}));

export default navbarStyles;
