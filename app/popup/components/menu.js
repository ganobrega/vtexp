import React, { useState, useEffect } from 'react';
import parseUrl from 'url-parse';
import * as _ from 'ramda';
import { Animated } from 'react-animated-css';
import { useTranslation } from 'react-i18next';

import { Button, Box, Text, } from 'grommet';
import * as Icons from 'grommet-icons';

import { VTEXMenu } from '../services/constants';


function findPath(a, obj) {
  let result;
  function iter(o, p) {
    return Object.keys(o).some((k) => {
      result = p.concat(Array.isArray(o) ? +k : k);
      return o[k] === a || o[k] && typeof o[k] === 'object' && iter(o[k], result);
    });
  }
  return iter(obj, []) && result || undefined;
}

const MenuItem = ({
  icon, text, path, invert = false, onClick, blank, disabled,
}) => {
  const Icon = icon === undefined ? (<Icons.Cart />) : Icons[icon];

  return (
    <Box
      width="40%"
      round="xsmall"
      height="100px"

      margin="small"
      border={!blank && { color: 'light-3' }}
      background={invert ? 'brand' : 'white'}
    >
      <Box
        as={Button}
        onClick={!blank && onClick}
        focusIndicator={false}
        disabled={disabled}
        align="center"
        justify="center"
        style={{ display: 'flex' }}
        plain
        fill
      >
        {!blank && <Icon />}
        {!blank && <Text size="small" weight="bold" color={invert ? 'white' : 'brand'} textAlign="center">{text}</Text>}

      </Box>
    </Box>
  );
};

export default () => {
  const [links, setLinks] = useState(VTEXMenu);
  const [refreshing, setRefreshing] = useState(false);
  const [lastPath, setLastPath] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setRefreshing(false);
  }, [links]);


  if (links === undefined) {
    return (null);
  }


  const onClick = (value) => {
    setRefreshing(true);

    setTimeout(() => {
      if (value.path.indexOf('~') === 0) {
        chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
          const currentUrl = tab[0].url;

          const url = parseUrl(currentUrl);

          url.set('hash', '');

          url.set('query', '');

          url.set('pathname', value.path.substr(1));

          if (url.host.indexOf('vtex.') < 0) {
            const background = chrome.extension.getBackgroundPage();
            url.set('host', `${background.accountName}.myvtex.com`);
          }

          chrome.tabs.update(tab.id, { url: url.href });
        });
        setRefreshing(false);
      } else if (value.path.indexOf('#') === 0) {
        let newPath = lastPath.filter((x) => x !== 'path').reverse().slice(1).reverse();

        if (newPath.length === 1) {
          newPath = [];
        }

        const parent = _.path(newPath, VTEXMenu);

        setLastPath(newPath);
        setLinks(parent);
      } else {
        if (!value.children) { setRefreshing(false); return; }

        const newPath = findPath(value.path, VTEXMenu).filter((x) => x !== 'path');

        setLastPath(newPath);
        setLinks(value.children);
      }
    }, 32);
  };


  return (
    <Animated animationIn="zoomIn" animationOut="fadeOut" animationInDuration={300} isVisible={!refreshing}>
      <Box direction="row" align="start" justify="center" overflow="auto" pad={{bottom: 'small'}} fill wrap>
        {
          /* Back Button */
          lastPath.length > 0 && (<MenuItem onClick={() => onClick({ path: '#' })} icon="FormPreviousLink" text={t('Back')} path="#" invert />)
        }

        {
          /* Menu items */
          links.map((item) => (<MenuItem onClick={() => onClick(item)} icon={item.icon} text={t(item.name)} path={item.path} disabled={item.disabled} />))
        }

        {
          /* Blank item for submenus (that has a back button) */
          lastPath.length > 0 && (links.length % 2 === 0) && (<MenuItem blank />)
        }

        {
          /* Blank item for first menu (that doesn't has a back button) */
          lastPath.length === 0 && (links.length % 2 !== 0) && (<MenuItem blank />)
        }

      </Box>
    </Animated>
  );
};
