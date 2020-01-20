import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';


// Grommet
import { Box, Distribution, Text, Anchor } from 'grommet';


// Components
import Header from '../components/Header';
import Menu from '../components/Menu';



const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width: 400px;
    height: 420px;
  }
`;

const Content = (props) => {
  return (
    <>
      <Menu />
    </>
  );
}


export default (props) => (
  <>
    <GlobalStyles />

    <Header />
    <Content />
  </>
);

