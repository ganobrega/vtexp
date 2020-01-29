import React from 'react';
import * as Icons from 'grommet-icons';

import Main from './views/main';
import Fallback from './views/fallback';

const Routes = [
  {
    name: 'Fallback',
    path: '/error',
    Component: Fallback,
  },
  {
    name: 'Main',
    Component: Main,
  },

]

export default Routes;
