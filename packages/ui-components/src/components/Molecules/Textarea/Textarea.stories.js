import React from 'react';

import { Textarea } from '~Molecules';

const MAX_CHARACTERS = '100';
const NUM_COLUMNS = '5';
const NAME = 'textarea';

export default {
  title: 'Molecules/Textarea',
  component: Textarea,
  args: {
    maxChar: MAX_CHARACTERS,
    numRows: NUM_COLUMNS,
    name: NAME,
  },
  argTypes: {
    maxChar: { control: 'text' },
    numRows: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'colorMedium',
      values: [
        { name: 'colorMedium', value: '#a2a2a2' },
        { name: 'colorDark', value: '#3c3c3c' },
      ],
    },
  },
};

export const Default = args => <Textarea {...args} />;
export const Disabled = args => <Textarea isDisabled {...args} />;
