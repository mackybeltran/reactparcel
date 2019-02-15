import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Switch, Router, Redirect} from 'react-router-dom';
import './App.scss';
import Home from './components/Home.js'

class App extends Component {
  render() {
    return <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        </BrowserRouter>

      </div>

  }
}

export default App;