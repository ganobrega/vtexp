import React, { useState, useEffect } from 'react';
import * as _ from 'ramda';
import { createGlobalStyle } from 'styled-components';

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


  // useEffect(() => {
  //   console.log(links)
  // }, [links]);

  if (links === undefined) {
    return (null);
  }

  let onClick = (value) => {
    if (value.path.indexOf('~') == 0) {
      console.log('Redirect activeTab to: ', value.path);
    }
    else if (value.path.indexOf('#') == 0) {
      // TODO: Find the parent and set him as Link
    }
    else {
      setLinks([
        { name: 'Back', icon: 'FormPreviousLink', path: '#' },
        ...value.children
      ]);
    }
  }

  return (
    <Box pad={{ vertical: 'small', horizontal: 'small' }} direction="row" align="center" justify="center" wrap>

      {links.map((item, index) => {
        let { name, icon } = item;
        let Icon = icon === undefined ? (<Icons.Cart />) : Icons[icon];

        return (
          <Box key={index} onClick={() => onClick(item)} pad="small" width="40%" round="xsmall" height="100px" align="center" margin="small" border={{ color: 'light-3' }} justify="center">
            <Icon />
            <Text size="small" weight="bold" color="brand" textAlign="center">{name}</Text>
          </Box>
        )
      }
      )}


    </Box>
  );
}


export default (props) => (
  <>
    <GlobalStyles />

    <Header />
    <Content />
  </>
);

