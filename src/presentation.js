import React, { cloneElement } from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import slides from './slides';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default () => (
  <Deck
    transition={['zoom', 'slide']}
    transitionDuration={500}
    progress='none'
    controls={false}
    theme={theme}
  >
    {
      slides
        .map(x => x.default)
        .map((element, index) => cloneElement(element, {
          key: `slide-${index}`,
          transition: element.props.transition || ['slide']
        }))
    }
  </Deck>
);
