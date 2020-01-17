import React, { useState, useEffect } from 'react';
import * as _ from 'ramda';
import { createGlobalStyle } from 'styled-components';
import { Animated } from "react-animated-css";


// Grommet
import { Box, Distribution, Text, Anchor } from 'grommet';
import * as Icons from 'grommet-icons';


// Components
import Header from '../components/Header';
import { VTEXMenu } from '../services/constants';


const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width: 400px;
    height: 420px;
  }
`;

const Content = (props) => {

  const [links, setLinks] = useState(VTEXMenu);
  const [refreshing, setRefreshing] = useState(false);
  const [roadPath, setRoadPath] = useState([]);


  useEffect(() => {
    setRefreshing(false);
  }, [links]);

  useEffect(() => {
    if (roadPath.length === 0) {
      setLinks(links.slice(1));
    }
  }, [roadPath]);

  if (links === undefined) {
    return (null);
  }

  let onClick = (value, index) => {
    setRefreshing(true);

    if (value.path.indexOf('~') == 0) {
      console.log('Redirect activeTab to: ', value.path);
    }
    else if (value.path.indexOf('#') == 0) {
      let newPath = roadPath.splice(0, roadPath.length - 2);
      setLinks([
        { name: 'Back', icon: 'FormPreviousLink', path: '#' },
        ...(_.path(newPath, VTEXMenu))
      ]);
      setRoadPath(newPath);
    }
    else {
      console.log(value.children)
      setRoadPath([...roadPath, (index - 1) < 0 ? 0 : index - 1, 'children']);

      setLinks([
        { name: 'Back', icon: 'FormPreviousLink', path: '#' },
        ...value.children
      ].filter(x => x !== undefined));
    }
  }

  return (
    <Animated animationIn="zoomIn" animationOut="fadeOut" animationInDuration={300} isVisible={!refreshing}>
      <Box pad={{ vertical: 'small', horizontal: 'small' }} direction="row" align="center" justify="center" wrap>

        {links.map((item, index) => {
          let { name, icon } = item;
          let Icon = icon === undefined ? (<Icons.Cart />) : Icons[icon];

          return (
            <Box key={index} onClick={() => onClick(item, index)} pad="small" width="40%" round="xsmall" height="100px" align="center" margin="small" border={{ color: 'light-3' }} justify="center">
              <Icon />
              <Text size="small" weight="bold" color="brand" textAlign="center">{name}</Text>
            </Box>
          )
        }
        )}


      </Box>
    </Animated>
  );
}


export default (props) => (
  <>
    <GlobalStyles />

    <Header />
    <Content />
  </>
);

