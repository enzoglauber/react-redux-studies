import './style.scss';

import React from 'react';

import Buttons from '../../components/Examples/Buttons';
import Card from '../../components/Examples/Card';
import Checks from '../../components/Examples/Checks';
import Menu from '../../components/Examples/Menu';
import Radios from '../../components/Examples/Radios';
import Typographys from '../../components/Examples/Typographys';

export default () => (
  <div>
    <Menu />
    <Typographys />
    <Buttons />
    <Card />
    <Checks />
    <Radios />
  </div>
)
