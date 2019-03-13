import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Login from './components/login';
import Signup from './components/signup';
import ForgotPW from './components/ForgotPW'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotPW" component={ForgotPW}/>
    </Switch>
)


export default Routes;