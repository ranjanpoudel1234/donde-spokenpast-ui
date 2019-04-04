import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './containers/homepage';
import Login from './containers/login';
import Signup from './containers/signup';
import ForgotPW from './containers/ForgotPW'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotPW" component={ForgotPW}/>
    </Switch>
)


export default Routes;