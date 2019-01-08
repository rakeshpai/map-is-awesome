import React from 'react';
import { Heading, Slide, Link } from 'spectacle';

export default (
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      <Link
        href='https://elm-lang.org/'
        target='_blank'
      >
        Elm
      </Link>
    </Heading>
  </Slide>
);