import React from 'react';
import * as Icons from 'grommet-icons';

import Main from './views/Main';
import Fallback from './views/Fallback';
import Loading from './views/Loading';

const Routes = [
  {
    name: 'Fallback',
    path: '/error',
    Component: Fallback
  },
  {
    name: 'Main',
    path: '/',
    Component: Main
  },
  {
    name: 'Loading',
    Component: Loading
  },
]

export default Routes
