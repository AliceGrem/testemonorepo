import React from 'react';

import { Paragraph } from '~Atoms';

const MOCK_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  args: { children: MOCK_TEXT, textAlign: 'left' },
  argTypes: {
    color: { control: 'color' },
    children: { control: 'text' },
    textAlign: { control: 'text' },
  },
};

export const Default = args => <Paragraph {...args} />;
