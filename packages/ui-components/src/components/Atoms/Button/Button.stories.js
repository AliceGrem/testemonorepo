import { R } from '@monorepo/utils';
import React from 'react';

import { Box, Button } from '~Atoms';

import { sizes, types } from './constants';

const MOCK_TEXT = 'Consultar';
const DEFAULT_SIZE = R.prop('0', R.keys(sizes));

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: MOCK_TEXT,
    size: DEFAULT_SIZE,
  },
  argTypes: {
    size: { control: 'inline-radio', options: R.keys(sizes) },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

const handleClick = () => console.log('clicked');

export const ButtonTypes = ({ ...args }) => (
  <Box
    m={3}
    flexWrap="wrap"
    sx={{ gap: '24px', display: 'grid', gridTemplateColumns: 'auto auto' }}
  >
    {Object.keys(types).map(typeOfButton => (
      <Button {...args} type={typeOfButton} key={typeOfButton} onClick={handleClick} />
    ))}
  </Box>
);
