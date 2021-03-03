import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FormDataItem } from '../interfaces/interfaces';
import formToLoginStyles from '../styles/form-to-login-styles';

export const FormToLogin: React.FunctionComponent<FormDataItem> = (props) => {
  const classes = formToLoginStyles();
  const history = useHistory();
  const [userName, setUserName] = useState('');

  const handleSubmitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    props.handlerFormFromParent(userName);
    history.push('/game');
  }

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
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
          onSubmit={handleSubmitForm}
          autoComplete="off"
          >
          <TextField
            label='User Name'
            variant='outlined'
            required
            fullWidth
            name='userName'
            type='text'
            value={userName}
            onChange={handleUserNameChange}
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
