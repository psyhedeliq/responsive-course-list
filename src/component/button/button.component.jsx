import React from 'react';
import { StyledLinkButton } from './button.style';

const Button = ({ children, category, selected, onClick }) => {
  return (
    <StyledLinkButton
      onClick={onClick}
      selected={selected}
      category={category}
      href='#'
    >
      {children}
    </StyledLinkButton>
  );
};

export { Button };
