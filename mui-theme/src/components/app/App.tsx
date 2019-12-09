import './App.scss';

import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { theme } from '../../shared/theme/main-theme';
import Buttons from '../examples/Buttons';
import Checks from '../examples/Checks';
import Types from '../examples/Types';
import Radios from '../examples/Radios';
import Menu from '../examples/Menu';

export default () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Menu />
      <Types />
      <Buttons />
      <Checks />
      <Radios />
    </Container>
  </ThemeProvider>
)
