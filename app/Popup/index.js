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

const hasVTEXHost = () => {
  chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
    const currentTab = tab[0];
    const currentUrl = currentTab.url;

    const newUrl = parseUrl(currentUrl);

    // const domains = Constants.VTEX_HOSTS.map(i => parseUrl(i).split('.')[0]);


    // if (newUrl.host.includes(domains)) {
    //   console.log('Teste')
    // }
    // // const query = Object.entries(params[value]()).map((el) => el.join('=')).join('&');

    // newUrl.set('query', query);

    // chrome.tabs.update(tab.id, { url: newUrl.href });
  });
}

export default () => (
  <Provider store={store}>
    <Grommet theme={grommet} full>
      {hasVTEXHost ? <Main /> : <Fallback />}
    </Grommet>
  </Provider>
);
