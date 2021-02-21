import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutGame } from './components/AboutGame';
import { FormToLogin } from './components/FormToLogin';
import { PlayTheGame } from './components/PlayTheGame';
import { Footer } from './components/Footer';
import { AppItem } from './interfaces/interfaces';

class App extends React.Component<{}, AppItem> {
  constructor(props: AppItem | Readonly<AppItem>) {
    super(props);
    this.state = {
      userName: '',
      userScore: 0,
    };

    this.handleUserName = this.handleUserName.bind(this);
    this.handleUserScore = this.handleUserScore.bind(this);
  }

  handleUserName = (name: string) => {
    this.setState({ userName: name });
  };

  handleUserScore = (score: number) => {
    this.setState({ userScore: score });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar userName={this.state.userName} userScore={this.state.userScore}/>
        <main>
          <Switch>
            <Route
              path="/login"
              render={(props) => (
                <FormToLogin {...props} handlerFormFromParant={this.handleUserName} />
              )}
            />
            <Route component={AboutGame} path="/about" exact />
            <Route
              path="/game"
              render={(props) => (
                <PlayTheGame {...props} handlerScoreFromParent={this.handleUserScore} />
              )}
            />
            <Redirect from='/' to='/login'/>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
