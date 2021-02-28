import { makeStyles } from '@material-ui/core/styles';

const aboutGameItemStyle = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.up('lg')]: {
      borderRadius: 5,
      padding: '0 50px 50px',
      margin: '0px 25px',
      width: '500px',
      boxShadow: '20px 20px 20px black',
      textAlign: 'center',
    },
    [theme.breakpoints.down('md')]: {
      borderRadius: 5,
      padding: '0 50px 50px',
      margin: '0px 25px',
      width: '400px',
      boxShadow: '20px 20px 20px black',
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: 5,
      padding: '0 50px 50px',
      margin: '0px 25px',
      width: '300px',
      boxShadow: '20px 20px 20px black',
      textAlign: 'center',
    },
  },
  descr: {
    fontSize: '16px'
  }
}));

export default aboutGameItemStyle;
