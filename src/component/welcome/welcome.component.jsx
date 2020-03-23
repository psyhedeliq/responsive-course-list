import React from 'react';
import {
  StyledWelcome,
  StyledWelcomeTitle,
  StyledWelcomeDescription
} from './welcome.style';

const Welcome = () => {
  return (
    <StyledWelcome>
      <StyledWelcomeTitle>Vestibulum pulvinar nisi orci vel</StyledWelcomeTitle>
      <StyledWelcomeDescription>
        Nam velit libero, ornare ac neque vitae, elementum lobortis justo.
        Vestibulum non finibus dolor.
      </StyledWelcomeDescription>
    </StyledWelcome>
  );
};

export { Welcome };
