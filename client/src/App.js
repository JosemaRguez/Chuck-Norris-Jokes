import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import JokesBoard from './components/jokes/JokesBoard'
import JokeDetails from './components/jokes/JokeDetails'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Navbar">
            <Navbar />
            <Switch >
              <Route exact path='/' component={JokesBoard} />
              <Route path='/joke/:id' component={JokeDetails} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
