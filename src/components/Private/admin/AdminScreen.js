import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardAdmin from './DashboardAdmin';

const UsersScreen = () => {
    return (
        <Switch>

        <Route exact path="/" component = { DashboardAdmin } />      
        
        
        <Redirect to="/" />

    </Switch>
    );
};

export default UsersScreen;