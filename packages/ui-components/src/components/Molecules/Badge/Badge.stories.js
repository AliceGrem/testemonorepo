import { R } from '@monorepo/utils';
import React from 'react';

import { Box, Flex, ICON_SIZES } from '~Atoms';
import { Badge } from '~Molecules';

import * as icons from '../../../assets/icons';

const DEFAULT_SIZE = R.head(R.keys(ICON_SIZES));

export default {
  title: 'Molecules/Badge',
  component: Badge,
  args: {
    size: DEFAULT_SIZE,
  },
  argTypes: {
    colorIcon: { control: 'color' },
    colorBorder: { control: 'color' },
    colorBackground: { control: 'color' },
    size: { control: 'inline-radio', options: R.keys(ICON_SIZES) },
  },
};

export const BadgeTypes = args => (
  <Flex flexWrap="wrap">
    {R.keys(icons).map(name => (
      <Box m={3} key={name}>
        <Badge name={name} title={name} {...args} />
      </Box>
    ))}
  </Flex>
);
