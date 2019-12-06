import './App.scss';

import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { theme } from '../theme/acelero-theme';

export default () => (
  <ThemeProvider theme={theme}>
    <div className='container'>
      <Button variant="contained" color="primary">
        Olá Mundo
      </Button>
    </div>
  </ThemeProvider>
)
