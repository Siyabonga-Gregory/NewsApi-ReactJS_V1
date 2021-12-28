import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import News from './components/News/News';
import Resert from './components/ResertPassword/Resert';

function App() {
  return (
    <BrowserRouter>
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
           <Navigation/>
                 <Switch>
                      <Route exact path="/"                     component={Home}/>
                      <Route exact path="/register"             component={Register}/>
                      <Route exact path="/login"                component={Login}/>
                      <Route exact path="/news"                 component={News}/>
                      <Route exact path="/resert"               component={Resert}/>
                 </Switch>
       </div>
      </BrowserRouter>
  );
}

export default App;
