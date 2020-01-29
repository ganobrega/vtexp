import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';


// Grommet
import { Box, Distribution, Text, Anchor } from 'grommet';


// Components
import Header from '../components/header';
import Menu from '../components/menu';



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
};


export default (props) => {

  const globals = useSelector(state => state.globals);

  useEffect(() => {
    console.log(global.accountName);
    console.log(globals);
  }, [globals]);

  return (
    <>
      <GlobalStyles />

      <Header />
      <Content />
    </>
  );
};

