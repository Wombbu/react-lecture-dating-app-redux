import React from 'react';
import styled from 'styled-components';

const TopBarWrapper = styled.div`
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 1px rgba(100,100,100,0.4);
  justify-content: center;
  z-index: 100;
  position: relative;
  font-size: 30px;
`;

export const TopBar = () => (
    <TopBarWrapper>
    🔥
    </TopBarWrapper>
);