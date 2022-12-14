import { spacings } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import React from 'react';

import { Box, Flex } from '~Atoms';
import { Carmaker } from '~Molecules';
import { MAKER_BY_NAME } from '~Molecules/Carmaker/constants';

export default {
  title: 'Molecules/Carmaker',
  component: Carmaker,
  args: {
    width: spacings.layout.spacing4xl,
    height: spacings.layout.spacing4xl,
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export const CarmakerTypes = args => (
  <Flex flexWrap="wrap">
    {R.keys(MAKER_BY_NAME).map(maker => (
      <Box m={3} key={maker}>
        <Carmaker maker={maker} {...args} />
      </Box>
    ))}
  </Flex>
);
