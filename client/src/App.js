import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './components/home/Home.jsx';
import React from 'react';
import { Landing } from './components/landing/Landing';
import  Adopt from './components/adopt/Adopt'
import Detail from './components/detail/Detail'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component= {Landing}/>
          <Route path = '/home' component= {Home}/>
          <Route path = '/adopt' component= {Adopt}/>
          <Route path = '/:id' component= {Detail}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


