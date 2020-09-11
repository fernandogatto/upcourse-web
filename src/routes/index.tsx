import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={SignIn} exact />
        </Switch>
    );
};

export default Routes;
