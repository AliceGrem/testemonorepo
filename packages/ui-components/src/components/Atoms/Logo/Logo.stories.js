import { spacings } from '@monorepo/theme';
import React from 'react';

import { Box , Logo } from '~Atoms';

const DEFAULT_TEXT = 'itau';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  args: {
    title: DEFAULT_TEXT,
    width: spacings.layout.spacing4xl,
    height: spacings.layout.spacing4xl,
    name: DEFAULT_TEXT,
  },
  argTypes: {
    title: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    name: { control: 'text' },
  },
};

export const DefaultLogo = args => (
  <Box m={3}>
    <Logo {...args} />
  </Box>
);
