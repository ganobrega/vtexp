import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Grommet
import { Box, Text } from 'grommet';

const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width: 400px;
    height: 300px;
  }
`;

export default () => (
  <>
    <GlobalStyles />
    <Box>
      <Text size="large"> Não foi localizado um link compatível com a extensão :( </Text>
    </Box>
  </>
);
