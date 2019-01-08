import React from 'react';
import {
  Heading,
  Slide,
  Image,
  Text
} from 'spectacle';
import logo from './images/logo.png'

export default (
  <Slide bgColor="primary">
    <Heading size={1} fit textColor="secondary" >
      .map is awesome
    </Heading>
    <Text margin="50px 0 0" textColor="tertiary">
      @rakesh314
    </Text>
    <Image src={logo} />
  </Slide>
);