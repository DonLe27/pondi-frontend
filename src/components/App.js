import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import TodoList from './test-transition-page.js';
import StreamHolder from './StreamHolder.js';
import '../styles/App.css';

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/todo' component={TodoList}/>
        <Route path='/strhold' component={StreamHolder}/>
      </Switch>
    </BrowserRouter>
)

export default App;
