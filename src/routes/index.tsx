import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={SignIn} exact />

            <Route path="/home" component={Home} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
        </Switch>
    );
};

export default Routes;
