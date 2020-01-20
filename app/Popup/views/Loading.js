import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { withRouter } from 'react-router';


import { detectVTEX } from '../services/helpers';

const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width: 0px;
    height: 0px;
  }
`;

export default withRouter((props) => {

  // Detect VTEX
  useEffect(() => {
    detectVTEX()
      .then(isValid => {
        console.log('Is a Valid VTEX Website: ', isValid);
        if (isValid) {
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
