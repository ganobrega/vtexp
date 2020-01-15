import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Grommet
import { Box, Distribution, Text, Anchor } from 'grommet';
import * as Icons from 'grommet-icons';

// Components
import Header from '../components/Header';


const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width: 400px;
    height: 420px;
  }
`;

const Content = () => {

  const links = [
    { title: 'ORDERS', icon: <Icons.Cart size="medium" color="brand" /> },
    { title: 'TRANSACTIONS', icon: <Icons.CreditCard size="medium" color="brand" /> },
    {
      title: 'PRODUCTS', icon: <Icons.Catalog size="medium" color="brand" />
    },
    {
      title: 'ANALYTICS', icon: <Icons.BarChart size="medium" color="brand" />
    },
    { title: 'CLIENTE', icon: <Icons.Group size="medium" color="brand" /> },
    { title: 'STORE', icon: <Icons.Template size="medium" color="brand" /> },
    { title: 'MARKETPLACE', icon: <Icons.Action size="medium" color="brand" /> },
    { title: 'ACCOUNT', icon: <Icons.UserSettings size="medium" color="brand" /> },
  ];

  return (
    <Box pad={{ vertical: 'small', horizontal: 'small' }} direction="row" align="center" justify="center" wrap>

      {links.map(item => {
        let { title, icon } = item;

        return (
          <>
            <Box pad="small" width="40%" round="xsmall" height="100px" align="center" margin="small" border={{ color: 'light-3' }} justify="center">
              {icon}
              <Text size="small" weight="bold" color="brand" textAlign="center">{title}</Text>
            </Box>
          </>
        )
      }
      )}

    </Box>
  );
}

export default () => (
  <>
    <GlobalStyles />
    <Header />
    <Content />
  </>
)
