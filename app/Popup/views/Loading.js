import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setAccount } from '../store/globals/actions';

import VTEX from '../services/vtex';

const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width: 0px;
    height: 0px;
  }
`;

export default withRouter((props) => {

  const dispatch = useDispatch();

  const vtex = new VTEX();


  // Detect VTEX
  useEffect(() => {
    vtex.detect()
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

}

)
