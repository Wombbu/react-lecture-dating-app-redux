import React from 'react';
import styled from 'styled-components';

const TopBarWrapper = styled.div`
  height: 40px;
  background-color: white;
  display: flex;
  align-items: stretch;
  box-shadow: 0px 2px 1px rgba(100,100,100,0.4);
  justify-content: center;
  z-index: 100;
  position: relative;
`;

const TinderLogo = styled.img`
    object-fit: contain;
`;

export const TopBar = () => (
    <TopBarWrapper>
        <TinderLogo src="https://www.gotinder.com/images/intellectual-property/tinder_full_color_watermark.png" />
    </TopBarWrapper>
);