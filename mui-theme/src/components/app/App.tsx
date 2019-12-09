import './App.scss';

import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { theme } from '../../shared/theme/main-theme';
import Buttons from '../examples/Buttons';
import Checks from '../examples/Checks';
import Typographys from '../examples/Typographys';
import Radios from '../examples/Radios';
import Menu from '../examples/Menu';
import Card from '../examples/Card';

export default () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Menu />
      <Typographys />
      <Buttons />
      <Card />
      <Checks />
      <Radios />
    </Container>
  </ThemeProvider>
)
