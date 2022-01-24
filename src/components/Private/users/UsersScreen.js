import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardUser from './DashboardUser';

const UsersScreen = () => {
    return (
        <Switch>

        <Route exact path="/" component = { DashboardUser } />      
        
        
        <Redirect to="/" />

    </Switch>
    );
};

export default UsersScreen;