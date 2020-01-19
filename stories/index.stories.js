import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src';


storiesOf('ELEMENTS | Button', module)
  .add('Button solid Large', () =>(
    <div style={{ width: '320px', margin: '0 auto' }}>
      <Button
        btnColor='secondary'
        btnSize='large'
        btnType="solid"
        disabled={false}
        hasPointer
        iconLayer
        onBtnClick={action('fired')}
        rightArrow
      >Sign In
      </Button>
    </div>
  ), {
    info: {
      text: 'Component should be inlined between description and PropType table',
      inline: true
    },
  });
