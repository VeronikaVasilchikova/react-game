import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutGame } from './components/AboutGame';
import { FormToLogin } from './components/FormToLogin';
import { Game } from './components/Game';
import { Footer } from './components/Footer';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Switch>
          <Route component={AboutGame} path="/" exact />
          <Route component={FormToLogin} path="/login" />
          <Route component={Game} path="/game" />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
