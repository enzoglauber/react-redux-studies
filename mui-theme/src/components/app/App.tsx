import './App.scss';

import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { theme } from '../../shared/theme/acelero-theme';
import Buttons from '../types/Buttons';
import Types from '../types/Types';

export default () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Types />
      <Buttons />
    </Container>
  </ThemeProvider>
)
