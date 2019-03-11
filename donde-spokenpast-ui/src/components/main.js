import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage';
import Login from './login';
import Signup from './signup';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </Switch>
)


export default Main;