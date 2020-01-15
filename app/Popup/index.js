import React from 'react';
import Reactotron from 'reactotron-react-js';
import parseUrl from 'url-parse';

// Grommet
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Views
import Main from './views/Main';
import Fallback from './views/Fallback';

// Variables
import Constants from './services/constants';

Reactotron
  .configure()
  .connect();

export default () => (
  <Provider store={store}>
    <Grommet theme={grommet} full>
      {true ? <Main /> : <Fallback />}
    </Grommet>
  </Provider>
);
