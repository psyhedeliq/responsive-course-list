import React from 'react';
import { StyledLinkButton } from './button.style';

const Button = ({ children }) => {
  return <StyledLinkButton href='#'>{children}</StyledLinkButton>;
};

export { Button };
