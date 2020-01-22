import React from 'react';
import * as Icons from 'grommet-icons';

import Main from './views/main';
import Fallback from './views/fallback';
import Loading from './views/loading';

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
