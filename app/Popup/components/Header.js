import React from 'react';

import {
  Heading, Button, Menu, Box, Text,
} from 'grommet';

import * as Icons from 'grommet-icons';

import parseUrl from 'url-parse';

import GlobalActions from '../store/global/actions';

const ParamAction = ({ value, children }) => {

  const onClick = (ev) => {
    console.log(ev);

    const params = {
      desktop() {
        return {
          uam: false,
        };
      },
      mobile() {
        return {
          uam: true,
          mobile: 4,
        };
      },
      cache() {
        return {
          utm_source: +new Date(),
        };
      },
    };

    if (params[value] === undefined) {
      throw Error('Device value not found');
    } else {
      chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
        const currentTab = tab[0];
        const currentUrl = currentTab.url;

        const newUrl = parseUrl(currentUrl);
        const query = Object.entries(params[value]()).map((el) => el.join('=')).join('&');

        newUrl.set('query', query);

        chrome.tabs.update(tab.id, { url: newUrl.href });
      });
    }

  };

  return (
    <Box direction="column" align="center" justify="center">
      <Button plain round="medium" pading="small" onClick={onClick}>{children}</Button>
    </Box>
  );
};

const Devices = () => (
  <Box direction="row" gap="small">
    <ParamAction value="mobile"><span role="img" aria-label="Mobile phone">📱</span></ParamAction>
    <ParamAction value="desktop"><span role="img" aria-label="Desktop">🖥</span></ParamAction>
  </Box>
);

const Domains = () => (
  <Box direction="column" justify="center">
    <Menu
      label="🌐"
      icon={false}
      items={[
        { label: 'Stable', onClick: () => { } },
        { label: 'Beta', onClick: () => { } },
        { label: 'My Vtex', onClick: () => { } },
        { label: 'Local', onClick: () => { } },
      ]}
    />
  </Box>
);

export default () => {

  return (
    <Box direction="row" justify="between" pad={{ vertical: 'small', horizontal: 'medium' }}>
      <Box direction="row" gap="small">
        <Heading level={3} size="large">VTEXP</Heading>
        <Box direction="column" align="center" justify="center">
          <Box background="brand" flex="shrink" pad={{ horizontal: 'medium' }} round="medium"><Text size="xsmall">stable</Text></Box>
        </Box>
      </Box>
      <Box direction="row">

        <ParamAction value="cache"><span role="img" aria-label="Cache">🧻</span></ParamAction>

        <Box className="divisor" border={{ color: 'light-1', size: 'thin' }} margin={{ vertical: 'medium', horizontal: 'medium' }} plain />

        <Devices />

        <Box className="divisor" border={{ color: 'light-1', size: 'thin' }} margin={{ vertical: 'medium', horizontal: 'medium' }} plain />

        <Domains />
      </Box>

    </Box>
  );
};
