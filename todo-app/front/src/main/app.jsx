import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'
import Button from '@material-ui/core/Button';

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
        <Button variant="contained" color="primary">
            Olá Mundo
        </Button>
    </div>
)