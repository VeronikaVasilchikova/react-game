import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutGame } from './components/AboutGame';
import { FormToLogin } from './components/FormToLogin';
import { PlayTheGame } from './components/PlayTheGame';
import { Footer } from './components/Footer';
import {
  purple,
  deepPurple,
  lightBlue,
  blue,
} from "@material-ui/core/colors";

// For Switch Theming
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const App: React.FunctionComponent = () => {
  const [userName, setUserName] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [darkStateTheme, setDarkStateTheme] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: purple[500]
      },
      secondary: {
        main: deepPurple[900]
      }
    }
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: lightBlue[500]
      },
      secondary: {
        main: blue[500]
      }
    }
  });

  const handleUserName = (name: string) => {
    setUserName(name);
  };

  const handleUserScore = (score: number) => {
    setUserScore(score);
  };

  const handleDarkstate = (darkStateValue: boolean) => {
    setDarkStateTheme(darkStateValue);
  }

  return (
    <ThemeProvider theme={darkStateTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar userName={userName} userScore={userScore} handlerThemeFromParent={handleDarkstate} />
        <main>
          <Switch>
            <Route
              path="/login"
              render={(props) => (
                <FormToLogin {...props} handlerFormFromParent={handleUserName} />
              )}
            />
            <Route component={AboutGame} path="/about" exact />
            <Route
              path="/game"
              render={(props) => (
                <PlayTheGame {...props} handlerScoreFromParent={handleUserScore} />
              )}
            />
            <Redirect from='/' to='/login'/>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
