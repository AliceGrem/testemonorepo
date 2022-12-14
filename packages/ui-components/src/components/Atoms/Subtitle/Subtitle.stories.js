import React from 'react';

import { Subtitle } from '~Atoms';

const MOCK_TEXT = 'Encontramos o veículo que você está anunciando';

export default {
  title: 'Atoms/Subtitle',
  component: Subtitle,
  args: { children: MOCK_TEXT },
  argTypes: {
    color: { control: 'color' },
    children: { control: 'text' },
    textAlign: { control: 'text' },
  },
};

export const Default = args => <Subtitle {...args} />;
