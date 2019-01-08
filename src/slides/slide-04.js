import React from 'react';
import { Slide } from 'spectacle';
import styled from '@emotion/styled';

const Code = styled('div')`
  font-family: monospace;
`;

export default (
  <Slide bgColor="black" textColor="primary">
    <Code>&lt;code /&gt;</Code>
  </Slide>
);
