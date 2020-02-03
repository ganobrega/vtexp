import React from 'react';

import { Heading, Header, Box, Button, Menu, Table, TableHeader, TableRow, TableCell, TableBody } from 'grommet';
import * as Icons from 'grommet-icons';
import { createGlobalStyle } from 'styled-components';
import { TableIt } from './helpers';

const GlobalStyles = createGlobalStyle`
  html, body, #root{
    margin: 0;
    padding: 0;
  }
`;

const PageDetails = () => {
  const data = {
    headers: [
      { label: 'Name', name: 'name', as: 'strong' },
      { label: 'Value', name: 'value' },
    ],
    items: [
      { name: 'Layout - ID (lid)', value: 'xxxxx-xxxxx-xxxxxx-xxxxx' },
      { name: 'Layout - Name', value: '@xxxxxx@' },
      { name: 'User Agent (uam)', value: 'Disabled' },
      { name: 'User Agent - Device (mobile)', value: 'Mobile (4)' },
      { name: 'UTM Source (utm_source)', value: 'xxxxxxxxx' },
    ]
  }
  return (
    <Box>
      <Heading level="4"> Page </Heading>
      <TableIt data={data} />
    </Box>
  )
}

const StoreInformations = () => {
  const data = {
    headers: [
      { label: 'Name', name: 'name', as: 'strong' },
      { label: 'Value', name: 'value' },
    ],
    items: [
      { name: 'Account', value: 'xxxx' },
      { name: 'Currency', value: 'xxxx' },
      { name: 'Description', value: 'xxxx' },
      { name: 'Author', value: 'xxxx' },
      { name: 'VTEX Version', value: 'xxxx' },
    ]
  }
  return (
    <Box>
      <Heading level="4"> Informations </Heading>
      <TableIt data={data} />
    </Box>
  )
}

export default () => {
  return (
    <Box pad="medium">
      <GlobalStyles />
      <Box>
        <Heading level="2"> [StoreName] </Heading>

        {/* <Heading level="4"> Times Square </Heading> */}
      </Box>
      <StoreInformations />
      <PageDetails />
    </Box>
  );
};
