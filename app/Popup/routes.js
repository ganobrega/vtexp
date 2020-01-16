import React from 'react';
import * as Icons from 'grommet-icons';

import Main from './views/Main';
import Fallback from './views/Fallback';

const Routes = [
  {
    name: 'Fallback',
    path: '/error',
    Component: Fallback
  },
  {
    name: 'Main',
    Component: Main
  },
]

export default Routes
