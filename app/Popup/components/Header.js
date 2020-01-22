import React from 'react';

import {
  Heading, Button, Menu, Box, Text,
} from 'grommet';

import * as Icons from 'grommet-icons';

import parseUrl from 'url-parse';
import queryString from 'query-string';

import GlobalActions from '../store/globals/actions';

const injectParams = (params) => {
  chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
    const currentTab = tab[0];
    const currentUrl = currentTab.url;

    const url = parseUrl(currentUrl);

    let query = queryString.parse(url.query);

    query = {
      ...query,
      ...params
    }

    url.set('query', queryString.stringify(query));

    chrome.tabs.update(tab.id, { url: url.href });
  });
}

const SnapButton = ({ value, children, disabled }) => {

  const onClick = (ev) => {

    const params = {
      desktop() {
        injectParams({
          uam: false,
        });
      },
      mobile() {
        injectParams({
          uam: true,
          mobile: 4,
        });
      },
      cache() {
        injectParams({ utm_source: +new Date(), });
      },
      bookmark() {
        console.info('Open bookmark');
      }

    };

    if (params[value] === undefined) {
      throw Error('Action not found');
    } else {
      params[value]();
    }

  };

  return (
    <Box direction="column" align="center" justify="center" disabled={disabled} >
      <Button plain round="medium" pading="small" onClick={onClick}>{children}</Button>
    </Box >
  );
};

const Devices = () => (
  <Box direction="row" gap="small">
    <SnapButton value="mobile"><span role="img" aria-label="Mobile phone">📱</span></SnapButton>
    <SnapButton value="desktop"><span role="img" aria-label="Desktop">🖥</span></SnapButton>
  </Box>
);

const Domains = () => (
  <Box direction="column" justify="center">
    <Menu
      label="🌐"
      icon={false}
      items={[
        { label: 'Production', onClick: () => { } },
        { label: 'Stable', onClick: () => { } },
        { label: 'Beta', onClick: () => { } },
        { label: 'My Vtex', onClick: () => { } },
        { label: 'Local', onClick: () => { } },
      ]}
    />
  </Box>
);

const Tools = () => (
  <Box direction="row" gap="small">
    <SnapButton disabled={true} value="bookmark"><span role="img" aria-label="Bookmark">📕</span></SnapButton>
    <SnapButton value="cache"><span role="img" aria-label="Cache">🧻</span></SnapButton>
  </Box>
);

const SnapButtons = () => (
  <Box direction="row">
    <Tools />

    <SnapDivisor />

    <Devices />

    <SnapDivisor />

    <Domains />
  </Box>
);

const SnapDivisor = () => (
  <Box className="divisor" border={{ color: 'light-1', size: 'thin' }} margin={{ vertical: 'medium', horizontal: 'medium' }} plain />
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

      <SnapButtons />

    </Box>
  );
};
