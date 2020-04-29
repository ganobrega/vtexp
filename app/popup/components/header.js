import React, { useRef, useState, useEffect } from 'react';

// Icons: https://materialdesignicons.com/

import {
  Heading, Button, Menu, Box, Text, Drop
} from 'grommet';

import * as Icons from 'grommet-icons';

import parseUrl from 'url-parse';
import queryString from 'query-string';

const injectParams = (params) => {
  chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
    const currentTab = tab[0];
    const currentUrl = currentTab.url;

    const url = parseUrl(currentUrl);

    let query = queryString.parse(url.query);

    delete query.mobile;

    query = {
      ...query,
      ...params
    }

    url.set('query', queryString.stringify(query));

    chrome.tabs.update(tab.id, { url: url.href });
  });
}

const SnapButton = ({ value, children, disabled, tooltip }) => {
  const [over, setOver] = useState();
  const ref = useRef();

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
      tablet() {
        injectParams({
          uam: true,
          mobile: 3,
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
    <Box direction="column" align="center" justify="center" overflow="visible">
      <Button
        plain
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onFocus={() => { }}
        onBlur={() => { }}
        round="medium"
        pading="small"
        onClick={onClick}
        disabled={disabled}>{children}</Button>

      {ref.current && over && (
        <Drop align={{ top: "bottom" }} target={ref.current} overflow="unset" plain>
          <Box
            margin="xsmall"
            pad={{ vertical: "xsmall", horizontal: "medium" }}
            background="dark-3"
            round={{ size: "medium" }}
          >
            <Text size="small">{tooltip}</Text>
          </Box>
        </Drop>
      )}
    </Box>
  );
};

const Devices = () => (
  <Box direction="row" gap="small">
    <SnapButton value="tablet" tooltip="Tablet view"><span role="img" aria-label="Tablet phone">📱</span></SnapButton>
    <SnapButton value="mobile" tooltip="Mobile view"><span role="img" aria-label="Mobile phone">📱</span></SnapButton>
    <SnapButton value="desktop" tooltip="Desktop view"><span role="img" aria-label="Desktop">🖥</span></SnapButton>
  </Box>
);

const Domains = () => (
  <Box direction="column" justify="center">
    <Menu
      disabled={true}
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
    <SnapButton disabled={true} value="bookmark" tooltip="Bookmark"><span role="img" aria-label="Bookmark">📕</span></SnapButton>
    <SnapButton value="cache" tooltip="Clean Cache"><span role="img" aria-label="Cache">🧻</span></SnapButton>
  </Box>
);

const SnapButtons = () => (
  <Box direction="row">
    <Tools />

    <SnapDivisor />

    <Devices />

    {/* <SnapDivisor /> */}

    {/* <Domains /> */}
  </Box>
);

const SnapDivisor = () => (
  <Box className="divisor" border={{ color: 'light-1', size: 'thin' }} margin={{ vertical: 'medium', horizontal: 'medium' }} plain />
);

export default () => {

  return (
    <Box direction="row" justify="between" pad={{ vertical: 'small', horizontal: 'large' }} gap="small">
      <Box direction="row" gap="small">
        <Heading level={3} size="large">VTEXP</Heading>
        <Box direction="column" align="center" justify="center">
          <Box background="brand" flex="shrink" pad={{ horizontal: 'medium' }} round="medium"><Text size="xsmall" truncate>{global.accountName}</Text></Box>
        </Box>
      </Box>

      <SnapButtons />

    </Box>
  );
};
