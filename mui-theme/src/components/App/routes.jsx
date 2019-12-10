import { Container } from '@material-ui/core';
import React from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';

import Example from '../../pages/Example';
import Home from '../../pages/Home';
import Vehicles from '../../pages/Vehicles';

export default props => (
    <HashRouter>
        <Container>
            <Redirect from='*' to='/home' />
            <Route path='/home' component={Home} />
            <Route path='/lista' component={Vehicles} />
            <Route path='/examples' component={Example} />
        </Container>
    </HashRouter>
)