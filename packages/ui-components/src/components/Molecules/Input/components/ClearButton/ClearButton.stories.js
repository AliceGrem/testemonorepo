import { R, SIZES_FORM_CONTROL } from '@monorepo/utils';
import React from 'react';

import { ClearButton } from '~Molecules/Input/components';

const DEFAULT_SIZE = R.head(R.keys(SIZES_FORM_CONTROL));

export default {
  title: 'Molecules/ClearButton',
  component: ClearButton,
  args: { size: DEFAULT_SIZE, isError: false },
  argTypes: {
    size: { control: 'inline-radio', options: R.keys(SIZES_FORM_CONTROL) },
    isError: { control: 'boolean' },
  },
};

export const DefaultClearButton = args => <ClearButton {...args} />;
