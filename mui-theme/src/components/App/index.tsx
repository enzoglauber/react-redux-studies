import './style.scss';

import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { theme } from '../../shared/theme/main-theme';
import Routes from './routes';

export default () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
)
