import React from 'react';
import {
  StyledWelcome,
  StyledWelcomeTitle,
  StyledWelcomeDescription
} from './welcome.style';
import { Button } from '../button';

const Welcome = () => {
  return (
    <StyledWelcome>
      <StyledWelcomeTitle>Vestibulum pulvinar nisi orci vel</StyledWelcomeTitle>
      <StyledWelcomeDescription>
        Nam velit libero, ornare ac neque vitae, elementum lobortis justo.
        Vestibulum non finibus dolor.
      </StyledWelcomeDescription>
      <Button>Call to action</Button>
    </StyledWelcome>
  );
};

export { Welcome };
