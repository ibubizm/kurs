import React from 'react'
import '../vars.scss'
import './App.scss';
import Nav from '../nav/nav'
import Content from '../content/content'
import About from '../about/about'
import Weather from '../weather/weather'    
import DoList from '../test/test'  
import Goods from '../goods/goods'
import Footer from '../footer/footer'
import apple from '../goods/apple.jpg'
import juice from '../goods/juice.jpg'
import Test2 from '../test2/test2'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const goods = [
  {title: 'appple', price: 1000, img: apple},
  {title: 'juice', price: 200, img: juice}
]

const nav = [
  {name: 'Main', link: '/'},
  {name: 'About', link: '/about'},
  {name: 'Do list', link: '/do_list'},
  {name: 'Weather', link: '/weather'}
]

let list = {
  person: [{
  name:'ernest',
  surename: 'ibubizm'
},
  {
    name: 'nasty',
    surename: 'ambra'
  }]
}

function App(props){

  return (
    <div className="App">
      <Nav nav={nav} />
      {/* <Test args={10} /> */}
      {/* <Test2 /> */}
      <Router>
        <Switch>
          <Route  path="/weather" component={Weather}/>
          <Route  path="/about" component={About}/>
          <Route  path="/do_list" component={DoList}/>
          <Route exect path="/" component={Content} />
        </Switch>
      </Router>
      {/* <Footer  comp={list}/> */}
      {/* <Goods ass={goods} /> */}

    </div>
  )

}

export default App;
