import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Lobby from './Lobby';
import Game from './Game';

export default function Page() {
  return (
    <Switch>
      <Route path="/lobby">
        <Lobby />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}