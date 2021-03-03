import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {
  purple,
  deepPurple,
  lightBlue,
  blue,
} from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Navbar } from './components/Navbar';
import { AboutGame } from './components/AboutGame';
import { FormToLogin } from './components/FormToLogin';
import { PlayTheGame } from './components/PlayTheGame';
import { Footer } from './components/Footer';
import SaveGameState from './utils/saveGameState';

const App: React.FunctionComponent = () => {
  const [userName, setUserName] = SaveGameState('userName', '');
  const [userScore, setUserScore] = SaveGameState('userScore', 0);
  const [darkStateTheme, setDarkStateTheme] = SaveGameState('isDarkState', false);
  const [isSound, setSound] = SaveGameState('isMuted', false);

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

  const handleSound = (soundValue: boolean) => {
    setSound(soundValue);
  }

  return (
    <ThemeProvider theme={darkStateTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar
          userName={userName}
          userScore={userScore}
          handlerThemeFromParent={handleDarkstate}
          handlerSoundsFromParent={handleSound}
          handlerUserNameFromParent={handleUserName}
          handlerUserScoreFromParent={handleUserScore}
        />
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
                <PlayTheGame {...props} handlerScoreFromParent={handleUserScore} isMutedValue={isSound} />
              )}
            />
            <Redirect from='/' to='/about'/>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
