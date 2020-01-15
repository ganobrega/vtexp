import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Grommet
import { Box } from 'grommet';

// Components
import Header from '../components/Header';

export default () => (
  <>
    <Header />
    <Box pad={{ vertical: 'small', horizontal: 'medium' }} />
  </>
)
