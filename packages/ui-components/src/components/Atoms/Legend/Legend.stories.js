import React from 'react';

import { Legend } from '~Atoms';

const MOCK_TEXT = 'Escolha a modalidade do anúncio para cada um dos portais';

export default {
  title: 'Atoms/Legend',
  component: Legend,
  args: { children: MOCK_TEXT },
  argTypes: {
    color: { control: 'color' },
    children: { control: 'text' },
    textAlign: { control: 'text' },
  },
};

export const Default = args => <Legend {...args} />;
