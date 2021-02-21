import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormDataItem } from '../interfaces/interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      height: 60,
    },
  }),
);

export const FormToLogin: React.FunctionComponent<FormDataItem> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    props.handlerFormFromParant(userName);
    history.push('/game');
  }

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const handleUserPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  }

  return (
    <Container maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmitForm}
          >
          <TextField
            id="outlined-basic"
            label='User Name'
            variant='outlined'
            required
            fullWidth
            name='userName'
            type='text'
            value={userName}
            onChange={handleUserNameChange}
            className={classes.submit}
          />
          <TextField
            id="outlined-basic"
            label='Password'
            variant='outlined'
            required
            fullWidth
            name='password'
            type='password'
            value={userPassword}
            onChange={handleUserPasswordChange}
            className={classes.submit}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Start the game
          </Button>
        </form>
      </div>
    </Container>
  );
}
