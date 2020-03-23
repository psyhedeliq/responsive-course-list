import React from 'react';
import logo from '../../logo.svg';
import { StyledHeaderWrapper } from './header.style';

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <img width='178' height='40' src={logo} alt='Logo' />
    </StyledHeaderWrapper>
  );
};

export { Header };
