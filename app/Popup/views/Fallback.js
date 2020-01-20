import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Grommet
import { Box, Distribution, Text, Anchor } from 'grommet';
import * as Icons from 'grommet-icons';

const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width: 400px;
    height: 150px;
  }
`;

export default () => (
  <>
    <GlobalStyles />
    <Box pad="large" align="center" justify="center" gap="medium" fill>
      <Icons.Alert size="large" color="brand" />
      <Text size="medium"> Essa página não é uma loja VTEX.</Text>
    </Box>
  </>
);
