import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Grommet
// import { Box, Distribution, Text, Anchor } from 'grommet';

// Components
import Header from '../components/header';
import Menu from '../components/menu';


const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width: 400px;
    height: 450px;
  }
`;


export default () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Menu />
    </>
  );
};

