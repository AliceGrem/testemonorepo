import React from 'react';

import { Tooltip } from '~Atoms';

const MOCK_TEXT = 'Campo informativo';
export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  args: {
    children: MOCK_TEXT,
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = args => <Tooltip {...args} />;
