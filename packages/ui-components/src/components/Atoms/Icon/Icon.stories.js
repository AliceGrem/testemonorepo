import { R } from '@monorepo/utils';
import React from 'react';

import { Flex, Icon, ICON_SIZES } from '~Atoms';

import { icons } from '../../../assets';

const DEFAULT_SIZE = R.head(R.keys(ICON_SIZES));
export default {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    size: DEFAULT_SIZE,
    isDisabled: false,
  },
  argTypes: {
    stroke: { control: 'color' },
    isDisabled: { control: 'boolean' },
    size: { control: 'inline-radio', options: R.keys(ICON_SIZES) },
  },
};
export const IconTypes = ({ ...args }) => (
  <Flex flexWrap="wrap">
    {R.keys(icons).map(name => (
      <Flex m={3} key={name}>
        <Icon title={name} name={name} {...args} />
      </Flex>
    ))}
  </Flex>
);
