import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setAccount } from '../store/global/actions';


import { detectVTEX, identifyVTEXEnvironment } from '../services/helpers';

const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width: 0px;
    height: 0px;
  }
`;

export default withRouter((props) => {

  const dispatch = useDispatch();

  // Detect VTEX
  useEffect(() => {
    detectVTEX()
      .then(accountName => {
        if (accountName) {
          dispatch(setAccount(accountName));

          props.history.push('/')
        } else {
          props.history.push('/error')
        }
      });
  }, [])

  return (
    <>
      <GlobalStyles />

      <p></p>
    </>
  );
}

)
