import React, { useState, useEffect } from 'react';
import parseUrl from 'url-parse';
import * as _ from 'ramda';
import { Animated } from "react-animated-css";

import { Box, Distribution, Text, Anchor } from 'grommet';
import * as Icons from 'grommet-icons';

import { VTEXMenu } from '../services/constants';


function findPath(a, obj) {
  function iter(o, p) {
    return Object.keys(o).some(function (k) {
      result = p.concat(Array.isArray(o) ? +k : k);
      return o[k] === a || o[k] && typeof o[k] === 'object' && iter(o[k], result);
    });
  }
  var result;
  return iter(obj, []) && result || undefined;
}

const MenuItem = ({ icon, text, path, invert = false, onClick, blank }) => {
  let Icon = icon === undefined ? (<Icons.Cart />) : Icons[icon];

  return (
    <Box focusIndicator={false} onClick={!blank && onClick} width="40%" round="xsmall" height="100px" align="center" background={invert ? 'brand' : 'white'} margin="small" border={!blank && { color: "light-3" }} justify="center">
      {!blank && <Icon />}
      {!blank && <Text size="small" weight="bold" color={invert ? 'white' : 'brand'} textAlign="center">{text}</Text>}
    </Box>
  );
}


export default () => {
  const [links, setLinks] = useState(VTEXMenu);
  const [refreshing, setRefreshing] = useState(false);
  const [lastPath, setLastPath] = useState([]);

  useEffect(() => {
    setRefreshing(false);
  }, [links]);


  if (links === undefined) {
    return (null);
  }


  let onClick = (value) => {
    setRefreshing(true);

    setTimeout(() => {
      if (value.path.indexOf('~') == 0) {

        chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
          const currentUrl = tab[0].url;

          const url = parseUrl(currentUrl);

          console.log(url)

          url.set('hash', '')

          url.set('query', '');

          url.set('pathname', value.path.substr(1));

          chrome.tabs.update(tab.id, { url: url.href });
        });
        setRefreshing(false);

      }

      else if (value.path.indexOf('#') == 0) {
        let newPath = lastPath.filter(x => x !== 'path').reverse().slice(1).reverse();

        if (newPath.length === 1) {
          newPath = [];
        }

        let parent = _.path(newPath, VTEXMenu);

        setLastPath(newPath);
        setLinks(parent);
      }

      else {
        if (!value.children) { setRefreshing(false); return; };

        let newPath = findPath(value.path, VTEXMenu).filter(x => x !== 'path');

        setLastPath(newPath);
        setLinks(value.children);
      }

    }, 32);

  }


  return (
    <Animated animationIn="zoomIn" animationOut="fadeOut" animationInDuration={300} isVisible={!refreshing}>
      <Box pad={{ vertical: 'small', horizontal: 'small' }} direction="row" align="start" justify="center" overflow="auto" fill wrap>
        {
          /* Back Button */
          lastPath.length > 0 && (<MenuItem onClick={() => onClick({ path: '#' })} icon="FormPreviousLink" text="Back" path="#" invert />)
        }

        {
          /* Menu items */
          links.map(item => (<MenuItem onClick={() => onClick(item)} icon={item.icon} text={item.name} path={item.path} />))
        }

        {
          /* Blank item for submenus (that has a back button) */
          lastPath.length > 0 && (links.length % 2 === 0) && (<MenuItem blank={true} />)
        }

        {
          /*Blank item for first menu (that doesn't has a back button)*/
          lastPath.length === 0 && (links.length % 2 !== 0) && (<MenuItem blank={true} />)
        }

      </Box>
    </Animated>
  )
};
