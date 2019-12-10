import React from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';

import Example from '../../pages/Example';
import Home from '../../pages/Home';
import Vehicles from '../../pages/Vehicles';

export default props => (
    <HashRouter>
        
        <Route exact path="/">
            <Redirect to="/home" />
        </Route>
        <Route path='/home' component={Home} />
        <Route path='/lista' component={Vehicles} />
        <Route path='/examples' component={Example} />
        <Redirect from='*' to='/home' />
    </HashRouter>
)