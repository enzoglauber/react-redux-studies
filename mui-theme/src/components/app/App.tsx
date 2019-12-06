import './App.scss';

import { Button, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { theme } from '../../shared/theme/acelero-theme';
import Types from '../types/Types';

export default () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Types></Types>
      <Button variant="contained" color="primary">
        Olá Mundo
      </Button>
    </Container>
  </ThemeProvider>
)
