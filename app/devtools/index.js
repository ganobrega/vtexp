import React, { useRef, useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Heading, Box, Button, Menu, Drop, Accordion, AccordionPanel, Text } from 'grommet';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

import * as Icons from 'grommet-icons';
import { createGlobalStyle } from 'styled-components';
import { TableIt } from './helpers';
import styled from 'styled-components';


import Slider from "react-slick";

const GlobalStyles = createGlobalStyle`
  html, body, #root{
    margin: 0;
    padding: 0;
  }
`;

const PageDetails = () => {
  const data = {
    headers: [
      { label: 'Name', name: 'name', itemsProps: { as: 'strong', size: 'small' }, headerProps: { size: 'small' } },
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
      { label: 'Name', name: 'name', itemsProps: { as: 'strong', size: 'small' }, headerProps: { size: 'small' } },
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

const SnapDivisor = () => (
  <Box className="divisor" border={{ color: 'light-1', size: 'thin' }} margin={{ vertical: 'medium', horizontal: 'medium' }} plain />
);

const SnapButton = ({ disabled, tooltip, children }) => {
  const [over, setOver] = useState();
  const ref = useRef();

  return (
    <Box direction="column" align="center" justify="center" overflow="visible">
      <Button
        plain
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onFocus={() => { }}
        onBlur={() => { }}
        icon={children}
        disabled={disabled}></Button>

      {ref.current && over && (
        <Drop align={{ top: "bottom" }} target={ref.current} overflow="unset" plain>
          <Box
            margin="xsmall"
            pad={{ vertical: "xsmall", horizontal: "medium" }}
            background="dark-3"
            round={{ size: "medium" }}
          >
            <Text size="small">{tooltip}</Text>
          </Box>
        </Drop>
      )}
    </Box>
  )
}

const StyledSlider = styled(Slider)`

  .slick-dots{
    li {
      background: var(--light-4);
      height: 5px;

      &.slick-active{
        background: var(--brand);
      }

      button {
        &::before {
          display: none;
        }
      }
    }
  }
`

const Images = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <Box>
      <Heading level="4"> Images </Heading>
      <StyledSlider {...settings}>
        {[...new Array(10).keys()].map((i) => {
          return (
            <Box pad="small">
              <img style={{ width: '100%' }} src={`https://source.unsplash.com/random/150x150?v=${i}`} />
            </Box>
          )
        })}
      </StyledSlider>
    </Box>
  );
}

const Header = () => {
  return (
    <Box direction="row" justify="between">
      <Heading level="2"> MyStore </Heading>

      <Box direction="row" gap="small" align="center">
        <SnapButton tooltip="Placeholder"><Icons.Template size="18px" /></SnapButton>
        {/* <SnapButton tooltip="Test"><Icons.Test size="18px" /></SnapButton> */}
        <SnapButton tooltip="Product"><Icons.Edit size="18px" /></SnapButton>
        <SnapButton tooltip="SKUs"><Icons.List size="18px" /></SnapButton>
        <SnapButton tooltip="Link"><Icons.Link size="18px" /></SnapButton>
      </Box>
    </Box>
  )
}

export default () => {
  return (
    <>
      <GlobalStyles />
      <Grommet theme={grommet} cssVars full>
        <Box pad="medium">
          <Header />
          <Images />
          <StoreInformations />
          <PageDetails />
        </Box>
      </Grommet>
    </>
  );
};
