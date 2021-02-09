import React from 'react'
import './App.css';
import Nav from '../nav/nav'
import Content from '../content/content'
import About from '../about/about'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import { ReactComponent } from '*.svg';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route exect path="/about" component={About}/>
            <Route exect path="/" component={Content}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
