import React from 'react';
import { Slide, Heading, Text } from 'spectacle';
import styled from '@emotion/styled';
import orion from './images/orion.jpg'

const StyledHeading = styled(Heading)`
  font-family: monospace;
  text-shadow: 0 0 50px black;
`;

const Conditions = styled(Text)`
  text-shadow: 0 0 30px black;
`;

export default (
  <Slide bgColor="black" textColor="primary" bgImage={orion}>
    <StyledHeading textColor='white'>
      Functors are objects
      with .map*
    </StyledHeading>
    <Conditions textSize="70%" textColor="primary" margin="70px 0 0">
      * conditions apply
    </Conditions>
  </Slide>
);
