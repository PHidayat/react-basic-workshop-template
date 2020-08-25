import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import { HOME_PATH, CREATE_PATH } from './routes'
import Home from './routes/Home'
import Create from './routes/Create'
import Header from './components/Header'

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Router>
          <Header />
          <div className = 'container'>
            <Switch>
              <Route exact path = { HOME_PATH } component = { Home } />
              <Route exact path = { CREATE_PATH } component = { Create } />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App