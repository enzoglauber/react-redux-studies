import './style.scss';

import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { theme } from '../../shared/theme/main-theme';
import Footer from '../Footer';
import Topbar from '../Topbar';
import Routes from './routes';
import { Container } from '@material-ui/core';

export default () => (
  <ThemeProvider theme={theme}>
    <Container maxWidth='xl'>
      <Topbar />
      <Routes />
      <Footer />
    </Container>
  </ThemeProvider>
)
