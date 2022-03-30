import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './components/home/Home.jsx';
import React from 'react';
import { Landing } from './components/landing/Landing';
import  Addog from './components/addog/Addog'
import Detail from './components/detail/Detail'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component= {Landing}/>
          <Route path = '/home' component= {Home}/>
          <Route path = '/addog' component= {Addog}/>
          <Route path = '/:id' component= {Detail}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


